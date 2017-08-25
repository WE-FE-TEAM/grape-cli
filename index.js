/**
 * Created by wangcheng on 16/4/22.
 */


"use strict";

const path = require('path');
let fis = module.exports = require('fis3');

const grapeUtil = require('./lib/util.js');

//插件查找前缀
fis.require.prefixes.unshift('yogurt');
fis.require.prefixes.unshift('grape');

fis.cli.name = 'grape';
fis.cli.info = require('./package.json');

fis.set('app', '/app');
fis.set('static', '/static');
fis.set('template', '/views');
fis.set('map', '/resource-map');

fis.project.setProjectRoot(process.cwd());
//
// fis.config.set('settings.parser.babel-5.x', {
//    // blacklist: ['regenerator'],
//     ,
//     //stage: 3
// });

//css autoprefixer config
const autoPrefixConfig = {
    browsers : [ 'ios_saf >= 6.1', 'last 2 version' ]
};

//添加 grape run命令
fis.set('modules.commands', ['init', 'install', 'release', 'run', 'inspect']);
fis.require._cache['command-run'] = require('./command/run.js');

fis.grapeUtil = grapeUtil;


let projectDir = path.dirname(fis.project.getProjectPath());
let modulesDir = projectDir + '/common/node_modules';
let distDir = projectDir + '/../dist/';
let npmModule = 'common';

let clientRoadmap = {
    'client/(**)': {
        id: '$1',
        moduleId: '${namespace}:$1',
        release: '/${static}/${namespace}/$1'
    },
    'client/**.scss': {
        parser: fis.plugin('node-sass-we'),
        postprocessor: fis.plugin('autoprefixer-we', autoPrefixConfig),
        rExt: '.css'
    },
    'client/**.tpl': {
        preprocessor: fis.plugin('extlang'),
        postprocessor: fis.plugin('require-async'),
        useMap: true
    },
    'client/**.{tpl,js,ts,jsx,es,tsx}': {
        useSameNameRequire: true
    },
    'client/**.{js,jsx,ts,es}' : {
        preprocessor: [
            fis.plugin('js-require-file'),
            fis.plugin('js-require-css'),
            fis.plugin('define', {
                defines: {
                    'process.env.NODE_ENV': JSON.stringify('development')
                }
            })
        ],
        parser : fis.plugin('babel-5.x', {
            blacklist: [ 'useStrict' ],
            loose: ["es6.classes", "es6.properties.computed"]
        }),
        rExt: '.js'
    },
    'client/**.vue' : {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: [
            fis.plugin('vue-component', {
                // vue@2.x runtimeOnly
                runtimeOnly: true,          // vue@2.x 有runtimeOnly模式，为true时，template会在构建时转为render方法

                // styleNameJoin
                styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css`

                extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中

                // css scoped
                cssScopedIdPrefix: 'data-vc_',   // hash前缀：_v-23j232jj
                cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
                cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效

                cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
            })
        ],
    },
    'client/**.vue:js' : {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: [
            // fis.plugin('babel-6.x', {
            //     presets: ['es2015-loose', 'react', 'stage-3']
            // }),
            fis.plugin('babel-5.x', {
                blacklist: [ 'useStrict' ],
                loose: ["es6.classes", "es6.properties.computed"]
            }),
            // fis.plugin('translate-es3ify', null, 'append')
        ]
    },
    'client/**.vue:scss' : {
        rExt: 'css',
        parser: [
            fis.plugin('node-sass-we', {
                sourceMap: true,
                includePaths : [ projectDir ]
            })
        ],
        postprocessor: fis.plugin('autoprefixer-we', autoPrefixConfig)
    },
    'client/(page/**.tpl)': {
        url: '${namespace}/$1',
        release: '/${template}/${namespace}/$1',
        useMap: true,
        extras: {
            isPage: true
        }
    },
    'client/(widget/**.tpl)': {
        url: '${namespace}/$1',
        release: '/${template}/${namespace}/$1',
        useMap: true
    },
    'client/{widget,page}/**.{js,es,ts,tsx,jsx,css,less}': {
        isMod: true
    },
    'client/test/(**)': {
        useMap: false,
        release: '/test/${namespace}/$1'
    },
    '${namespace}-map.json': {
        release: '${map}/${namespace}-map.json'
    },
    '::package': {}
};

let serverRoadmap = {
    'server/(**)': {
        useMap: false,
        preprocessor: false,
        standard: false,
        postprocessor: false,
        optimizer: false,
        useHash: false,
        useDomain: false,
        isMod: false,
        release: '${app}/${namespace}/$0'
    },
    // add by liucong,20170810，升级Node.js 8.3.0，不再编译server端代码
    //'server/**.js' : {
        //server JS使用 babel 6.X 编译,因为其他模块都依赖的 6.X
        //parser : fis.plugin('babel-6.x', {
            // plugins: ["transform-runtime"]
            // 上面那种方式, 在jenkins编译时, 居然会报找不到: Unknown plugin "transform-runtime" specified in "base" 
            //plugins : [ require('babel-plugin-transform-runtime') ]
            // optional : ['runtime']
        //}) //无法使用typescript编译,不支持async
    //}
};

[clientRoadmap, serverRoadmap].forEach(function (roadmap) {
    fis.util.map(roadmap, function (selector, rules) {
        fis.match(selector, rules);
    });
});



fis.on('conf:loaded', function () {

    //模块化支持
    let npmPackage = grapeUtil.getNpmPackage(modulesDir, npmModule, fis.get('excludeModules'));
    fis.hook('commonjs', {
        packages: npmPackage,
        extList: ['.js', '.es', '.ts', '.tsx', '.jsx', '.vue']
    });
    fis.unhook('components'); // fis3 中预设的是 fis-components，这里不需要，所以先关了。
    fis.hook('node_modules'); // 使用 fis3-hook-node_modules 插件。

    /**
     * 定制 grape release发布地址
     */
    let distDir = fis.get('distDir');
    fis.match('**', {
        deploy: fis.plugin('local-deliver', {
            to: fis.get('options.d') ||  fis.get('options.dest') || distDir
        })
    });

});

/**
 * node_modules下的静态资源作为模块化处理
 */
fis.match('/node_modules/(**.{js,jsx,map,css,scss,less,svg,jpg,png,gif,webp,jpeg})', {
    isMod: true,
    url : '${static}/nm/$1',
    release : '/${static}/nm/$1'
});

/**
 * prod media 对静态资源进行压缩,md5产出
 */
fis.media('prod')
    .match('/client/**.{js,jsx,ts}', {
        useHash : true,
        optimizer : fis.plugin('uglify-js', {
            mangle : false
        }),
        preprocessor: fis.plugin('define', {
            defines: {
                'process.env.NODE_ENV': JSON.stringify('production')
            }
        })
    })
    .match('/client/**.{css,scss}', {
        useHash : true,
        optimizer : fis.plugin('clean-css')
    })
    .match('/client/**.{png,gif,jpg,jpeg}', {
        useHash : true,
        optimizer : fis.plugin('png-compressor')
    });

/**
 * 生成map.json文件
 */
fis.match('::package', {
    postpackager: function createMap(ret) {
        var path = require('path');
        var root = fis.project.getProjectPath();
        var map = fis.file.wrap(path.join(root, fis.get('namespace') + '-map.json'));
        map.setContent(JSON.stringify(ret.map, null, 4));
        ret.pkg[map.subpath] = map;
    }
});
