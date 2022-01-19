# storybook-addon-mobile-qrcode

storybook 的一个简单的二维码预览插件，支持扫码后在移动设备中预览当前 canvas 的内容

## 如何使用

```bash
$ npm install --save-dev storybook-addon-mobile-qrcode
# or
$ yarn add -D storybook-addon-mobile-qrcode
```

在你的项目中的 .storybook 目录下，修改 main.js ，引入插件
```bash
  module.exports = {
    "stories": [],
    "addons": [
      // ...
      'storybook-addon-mobile-qrcode'
    ],
  }
```
