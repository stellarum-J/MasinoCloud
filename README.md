# Maŝino · 墨芯的博客

[![框架](https://img.shields.io/badge/框架-Nuxt-00DC82?logo=Nuxt.js)](https://nuxt.com/)
[![CMS](https://img.shields.io/badge/CMS-Nuxt%20Content-00DC82?logo=Nuxt.js)](https://content.nuxt.com/)
[![部署平台](https://img.shields.io/badge/部署平台-阿里云%20ECS-FF6A00?logo=Alibaba+Cloud)](https://www.aliyun.com/product/ecs)
[![主题](https://img.shields.io/badge/主题-blog--v3%20Clarity-00BFFF)](https://github.com/L33Z22L11/blog-v3)

墨芯（Charnobly）的个人博客部署仓库，基于朋友纸鹿的开源主题 [blog-v3 (Clarity)](https://github.com/L33Z22L11/blog-v3)（Nuxt 4 + Nuxt Content v3）搭建，2026-09-04 上线。

- 站点：`http://8.140.208.196`（域名备案后更换）
- 双语：中文为主，`/en/` 前缀为英文镜像，侧栏「中 | EN」滑块无刷新切换

## 与上游主题的差异

本分支在上游基础上做了以下部署级改动：

- 站点个性化：`blog.config.ts`（站名 / 作者 / 分类）、`app/app.config.ts`（导航 / 页脚）、`app/feeds.ts`（友链）
- **中英双语**：`content/en/**` 英文内容树 → `/en/**` 路由（`nuxt.config.ts` 的 `afterParse` 钩子剥前缀）；`app/components/blog/LanguageToggle.vue` 语言滑块；未翻译页面自动回退中文原稿并标注
- **自建评论**：Twikoo 1.7.20（服务器 Docker + Nginx `/twikoo/` 反代），客户端脚本同源自托管于 `public/twikoo.all.min.js`
- 分类调整：技术 / 开发 / 安全 / 观察 / 杂谈 / 生活
- `drafts/` 目录存放文章手稿存档（不参与构建）

## 仓库结构

```
content/posts/2026/     中文文章（URL：/2026/文件名）
content/en/posts/2026/  英文对译（URL：/en/2026/文件名）
blog.config.ts          站名 / 作者 / 分类 / 评论 / head 注入
app/                    主题组件与页面（含本分支新增的 LanguageToggle）
drafts/                 手稿存档
```

## 部署与维护

- 服务器：阿里云 ECS（2C2G），仓库位于 `/opt/blog`，`pnpm generate` 产出静态文件由 Nginx 托管，无 Node 常驻进程
- 发布流程：本地修改 → `git commit` → `git push`（服务器已开 `receive.denyCurrentBranch=updateInstead`，推送直接更新工作区）→ 服务器执行构建：

```sh
NODE_OPTIONS=--max-old-space-size=2560 pnpm generate
```

> 2G 小内存机器，`NODE_OPTIONS` 必带。

- 双远端：`origin` = 服务器 `/opt/blog`（部署通道），`github` = GitHub 备份仓库

## 环境

Node 24 / pnpm 11（`packageManager` 钉在 11.21.0）。

## 致谢与许可

主题及绝大多数组件来自 [L33Z22L11/blog-v3](https://blog.zhilu.site/)，感谢纸鹿开源。代码部分遵循上游 LICENSE；站内文章内容 © 墨芯，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)。
