#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者MacOS 系统还需要修改此文件的读写权限为 755
// 具体就是痛过 chmod 755 cli.js 实现修改

console.log("cli working!")

// 脚手架的工作流程：
// 1. 通过命令行交互询问用户问题: 安装inquirer的npm包
// 2. 根据用户回答的结果生成文件

// import { inquirer } from "inquirer"
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const ejs = require("ejs")
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Project name?",
    },
  ])
  .then((answers) => {
    console.log(answers)
    // 根据用户回答的结果生成文件
    // 模版目录
    const tmplDir = path.join(__dirname, "templates")
    // 目标目录
    const destDir = process.cwd()
    // 将模版下的文件全部转换到目标目录
    fs.readdir(tmplDir, (err, files) => {
      if (err) throw err
      files.forEach((file) => {
        console.log(file)
        // 根据模版引擎渲染文件
        ejs.renderFile(path.join(tmplDir, file), answers, (err, result) => {
          if (err) throw err
          console.log(result)
          // 将结果写入目标路径
          fs.writeFileSync(path.join(destDir, file), result)
        })
      })
    })
  })
