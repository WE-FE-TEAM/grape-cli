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

//添加 grape run命令
fis.set('modules.commands', ['init', 'install', 'release', 'run', 'inspect']);
fis.require._cache['command-run'] = require('./command/run.js');

fis.grapeUtil = grapeUtil;

let clientRoadmap = {
    'client/(**)': {
        id: '$1',
        moduleId: '${namespace}:$1',
        release: '/${static}/${namespace}/$1'
    },
    'client/**.scss': {
        parser: fis.plugin('node-sass'),
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
            fis.plugin('js-require-css')
        ],
        parser : fis.plugin('babel-5.x', {
            loose: ["es6.classes", "es6.properties.computed"]
        }),
        rExt: '.js'
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
    'server/**.js' : {
        //server JS使用 babel 6.X 编译,因为其他模块都依赖的 6.X
        parser : fis.plugin('babel-6.x', {
            plugins: ["transform-runtime"]
            // optional : ['runtime']
        }) //无法使用typescript编译,不支持async
    }
};

[clientRoadmap, serverRoadmap].forEach(function (roadmap) {
    fis.util.map(roadmap, function (selector, rules) {
        fis.match(selector, rules);
    });
});

let projectDir = path.dirname(fis.project.getProjectPath());
let modulesDir = projectDir + '/common/node_modules';
let distDir = projectDir + '/../dist/';
let npmModule = 'common';


fis.on('conf:loaded', function () {

    //模块化支持
    let npmPackage = grapeUtil.getNpmPackage(modulesDir, npmModule, fis.get('excludeModules'));
    fis.hook('commonjs', {
        packages: npmPackage,
        extList: ['.js', '.es', '.ts', '.tsx', '.jsx']
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
fis.match('/node_modules/(**.{js,jsx,map})', {
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
