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


    }
};