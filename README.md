# 此项目用于学习

本项目参照网易云音乐小程序版，使用跨平台技术uniapp写成。在拥有网易云音乐小程序版绝大部分功能的基础上，添加了**上一首歌曲/下一首歌曲**的功能。

后端是采用开源项目[Binaryify/NeteaseCloudMusicApi: 网易云音乐 Node.js API service (github.com)](https://github.com/Binaryify/NeteaseCloudMusicApi)。

# 项目结构

```
cloud_music-uniapp
├─ App.vue
├─ common
│  ├─ api.js
│  ├─ common.js
│  ├─ config.js
│  └─ iconfont.css
├─ components
│  ├─ m-for-skeleton
│  │  └─ m-for-skeleton.vue
│  └─ musichead
│     └─ musichead.vue
├─ index.html
├─ main.js
├─ manifest.json
├─ pages
│  ├─ detail
│  │  └─ detail.vue
│  ├─ index
│  │  └─ index.vue
│  ├─ list
│  │  └─ list.vue
│  └─ search
│     └─ search.vue
├─ pages.json
├─ README.md
├─ static
├─ store
│  └─ index.js
└─ uni.scss

```

# 有关接口登录验证

首先要说的是，后端项目作者一直在保持更新，如果出现问题可以先去项目查看是否有相关问题及其解决方案。

接下来给大家提供一个我解决登录验证的笨方法——直接设置cookies。

1. 登录网易云音乐网页版，将cookies中以下三个键值对导出

    **WNMCID**、**WM_TID**、**MUSIC_U**。

2. 在接口项目的`server.js`中找到*Cookie Parser*部分。修改以下代码：

   ```js
   app.use((req, _, next) => {
       req.cookies = {
         WNMCID: 'WNMCID对应值',
         WM_TID: 'WM_TID对应值',
         MUSIC_U:'MUSIC_U对应值'
   }
   ```

> 需要注意的是，此方法就是用自己的账号信息通过验证，所以如果登录账号不是vip，就不能播放vip歌曲。