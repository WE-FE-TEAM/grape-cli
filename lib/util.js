/**
 * Created by wangcheng on 16/4/23.
 */

'use strict';

let fs = require('fs');
let path = require('path');

module.exports = {
    /**
     * 检查工程是否合法
     *  1. 检查cwd是否有package.json文件
     *  2. 检查package.json scripts是否有 server:dev和server:dev-win
     */
    checkProject : function () {
        let packageJson = path.join(process.cwd(), 'package.json');
        let checkResult = {
            status : 0,
            msg : 'check ok'
        };
        try{
            let packageStat = fs.statSync(packageJson);
            let packageInfo = require(packageJson);
            let scripts = packageInfo.scripts;
            if(scripts['server:dev-win'] && scripts['server:dev']){
                return checkResult;
            }else{
                return {
                    status : 1,
                    msg : 'npm script缺少[server:dev-win]或者[server:dev]'
                }
            }
        }catch(e){
            return {
                status : 1,
                msg : `packageJson ${packageJson} 不存在`
            }
        }
    },
    /**
     * 获取node_modules的短路径配置
     * 获取所有的子目录,生成格式
     *   {
     *      name : "文件夹名称",
     *      location : "common:node_modules/${name}",
     *      main : "package.json main属性"
     *   }
     * @param path
     */
    getNpmPackage : function (moduleDir, locationPrefix) {

        let modulePackage = [];
        try{
            let dirStat = fs.statSync(moduleDir);
            let modules = fs.readdirSync(moduleDir);
            modules.forEach( (module) => {
                if(!module.startsWith('.')){
                    let packageJson = moduleDir + '/' + module + '/package.json';
                    try{
                        let packageStat = fs.statSync(packageJson);
                        let packageInfo = require(packageJson);
                        let main = packageInfo.browser || packageInfo.main || `${module}.js`;
                        let location = `${locationPrefix}:node_modules/${module}`;
                        modulePackage.push({
                            name : module,
                            location : location,
                            main : main
                        });
                    }catch(e){
                        console.log(`文件[${packageJson}]不存在!`);
                    }
                }
            });
            return modulePackage;
        }catch(e){
            console.log(`目录[${moduleDir}]不存在!`);
        }
    }
};