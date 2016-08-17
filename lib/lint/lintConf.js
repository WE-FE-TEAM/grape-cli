/*
 * 使用airbnb的提供的lint配置
 * Created by liucong on 16/8/17.
 */

//base
const baseBestPractice=require("./base/best-practices");
const baseError=require("./base/errors");
const baseEs6=require("./base/es6");
const baseImports=require("./base/imports");
const baseNode=require("./base/node");
const baseStrict=require("./base/strict");
const baseStyle=require("./base/style");
const baseVariables=require("./base/variables");

//react
const reactBase=require("./react/react");
const reactA11y=require("./react/react-a11y");

module.exports.clientLint={
	rules: Object.assign({}, baseBestPractice.rules, baseError.rules, baseEs6.rules, baseStrict.rules, baseStyle.rules, baseVariables.rules,reactBase.rules, reactA11y.rules )
};

module.exports.serverLint={
	rules: Object.assign({}, baseBestPractice.rules, baseError.rules, baseEs6.rules, baseStrict.rules, baseNode.rules)
};