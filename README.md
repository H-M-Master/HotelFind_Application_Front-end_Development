<div align="center">

# Hotel Find 应用（前端）

一个面向酒店与出行服务的 React 单页应用，提供住宿浏览、预订流程、会员账户管理等多类界面模块。

</div>

## ✨ 项目亮点

- **模块化 UI**：`src/components` 下拆分了卡片、表单、通知提醒、精选酒店等 40+ 组件，便于复用与统一视觉。
- **多业务场景**：`src/pages` 中覆盖住宿、租车、账号设置、订单确认、FAQ 等页面，适合演示完整的酒店服务流程。
- **响应式样式体系**：所有页面/组件均配有独立 `.css` 文件，可根据设计稿快速微调样式。
- **React Router 支持**：借助 `react-router-dom` 构建前端路由，为后续接入真实接口或静态部署打下基础。

## 🛠 技术栈

- React 18 + Create React App（`react-scripts`）
- React Router DOM 6
- 原子化 CSS 文件 + `global.css`
- Testing Library & Jest（可选用 `npm test` 运行）

## 📁 推荐目录结构

```
public/
  index.html           # 单页应用入口模板
src/
  index.js             # React 入口 + Router 绑定
  App.js               # 全局路由及布局
  global.css           # 全局样式与 CSS 变量
  components/          # 复用组件（卡片、提示、表单…）
  pages/               # 功能页面（住宿、租车、账户、FAQ…）
```

## ⚡ 快速开始

1. 安装 Node.js ≥ 16（推荐使用 [Node LTS](https://nodejs.org/en)）。
2. 克隆或下载本仓库，终端定位到项目根目录。
3. 安装依赖：
   ```bash
   npm install
   ```
4. 启动开发服务器（默认端口 3000）：
   ```bash
   npm start
   ```
5. 浏览器打开 `http://localhost:3000` 查看效果，代码修改会自动热更新。

## 📦 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm start` | 启动开发环境（含热更新） |
| `npm run build` | 产出压缩后的生产构建到 `build/` |
| `npm test` | 交互式运行单元测试（Testing Library + Jest） |
| `npm run eject` | 暴露 CRA 配置（不可逆，谨慎执行） |

## 🔧 配置与定制

- **环境变量**：可在根目录创建 `.env`（例如 `REACT_APP_API_BASE_URL`）以注入运行时配置。
- **静态资源**：放置在 `public/`，通过 `/assets/xxx` 直接引用，或在组件中使用 `process.env.PUBLIC_URL`。
- **主题与样式**：集中维护于 `src/global.css`，可在此定义 CSS 变量供各组件复用。

## 🚀 构建与部署

1. 运行 `npm run build` 生成生产包。
2. 将 `build/` 目录部署到任意静态托管平台（GitHub Pages、Vercel、Netlify、Nginx 等）。
3. 如需与后端联调，可在本地配置代理或使用 `REACT_APP_*` 环境变量控制接口地址。

## 🧪 建议测试项

- 关键页面的可视化检查（住宿列表、详情、订单确认、FAQ）。
- 表单交互与输入校验（如 `AddNewCard`, `CheckDate`, `EditProfile` 等）。
- 导航流程：主页 → 详情 → 预订 → 订单完成。

## 🤝 参与贡献

1. Fork 仓库并创建新分支（`git checkout -b feature/xxx`）。
2. 提交更改（遵循语义化提交信息）。
3. 推送到你的 Fork 并发起 Pull Request，描述变更与影响范围。

## 📄 许可证

当前未显式指定许可证，默认保留所有权利。如果需要开源，请在根目录添加 `LICENSE` 文件并更新本说明。

---

如需我协助补充接口文档、设计稿链接或部署配置，欢迎随时提出！
