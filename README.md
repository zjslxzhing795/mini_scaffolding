# 脚手架的工作原理

https://www.bilibili.com/video/BV1ih411a7B8?p=15&vd_source=b831eb3e5888129473a908615b2c5022

安装 inquirer 遇到的问题： https://stackoverflow.com/questions/72812022/inquirer-on-node-js
我还没搞明白 esm comonnjs es6
Package.json： type module/commonjs 和 esm es6 之间的区别

### 项目流程：

1. yarn init -y 创建 package.json
2. 修改 package.json 中 bin 字段为 cli.js
3. 新增一个 cli.js, 必须有文件头
   #!/usr/bin/env node
4. Console.log，npm link 这个项目 xx 然后运行 xx,console 结果出来即可
5. 然后开始脚手架流程
6. 安装 inquirer 创建交互式命令询问
7. 制作 templates 文件
8. 读取模板目录下的所有文件，将其用 ejs 渲染到目标文件夹

切记，要运行这个脚手架如果是要最后在其他文件夹写入的话，则要进入到其他目录操作这个脚手架的全局软链接
