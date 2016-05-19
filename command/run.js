/**
 * Created by wangcheng on 16/4/20.
 */

'use strict';

const util = require('util');
const spawn = require('child_process').spawn;

let grapeUtil = require('../lib/util.js');

/**
 * grape run命令只能在项目根目录执行
 */

exports.name = 'run';
exports.desc = 'run grape server with nodemon';
exports.register = function (commander) {
    commander
        .option('-e, --env [env]', 'set NODE_ENV', String, 'development')
        .action(function () {
            let options = arguments[arguments.length - 1];
            let checkResult = grapeUtil.checkProject();
            if(checkResult.status === 0){
                startServer(options);
            }else{
                console.log(checkResult.msg);
            }
        });
};


function startServer(options) {
    let platform = process.platform;
    let env = process.env;
    let serverProcess = null;

    env.grape_env = options.env || 'development';

    let scripts = grapeUtil.getPackageInfo('scripts');
    let isWin = /^win/.test(platform) ? true : false;
    let taskName = '';

    if(isWin){
        taskName = `server:${env.grape_env}-win`;
    }else{
        taskName = `server:${env.grape_env}`;
    }


    if(!scripts[taskName]){
        console.log(`${taskName}不存在`);
        taskName = isWin ? 'server:dev-win' : 'server:dev';
    }

    if(isWin){
        serverProcess = spawn('npm.cmd', ['run', taskName], {
            env : env
        });
    }else{
        serverProcess = spawn('npm', ['run', taskName], {
            env : env
        });
    }

    serverProcess.stdout.pipe(process.stdout);
    serverProcess.stderr.pipe(process.stderr);

    serverProcess.on('close', (code) => {
        console.log(`服务器[close] with code ${code}`);
    });

    serverProcess.on('exit', (code) => {
        console.log(`服务器[exit] with code ${code}`);
    });

    serverProcess.on('error', (error) => {
        console.log(`服务器[error] ${error}`);
    });
}