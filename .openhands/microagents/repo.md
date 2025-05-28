# AITechHub 欢迎页

## 项目描述

AITechHub 是一个科技感强的AI技术前沿网站欢迎页，作为网站的首页，展现了六个核心板块：

1. **实时资讯** - 展示AI领域的最新新闻和突破
2. **AI洞察** - 提供对AI技术和应用的深度分析
3. **技术趋势** - 通过可视化图表展示当前AI技术热度和发展趋势
4. **研究前沿** - 展示学术界最新的AI研究成果
5. **应用案例** - 展示AI在医疗、农业等领域的实际应用
6. **开发社区** - 提供开发者活动和开源项目信息

该项目采用纯前端技术栈构建，具有现代化的UI设计和交互效果，适合作为AI技术相关网站的首页或着陆页。

## 技术栈

- HTML5
- CSS3 (使用现代CSS特性如Flexbox、Grid、变量等)
- JavaScript (原生JS，无框架依赖)
- Font Awesome (图标库)

## 项目结构

```
openhands_testing/
├── index.html      # 主页HTML文件
├── styles.css      # 样式文件
└── script.js       # JavaScript交互脚本
```

## 如何运行

该项目是纯静态网站，可以通过以下几种方式运行：

### 方法1：使用Python内置HTTP服务器

```bash
# 进入项目目录
cd /path/to/openhands_testing

# 启动Python HTTP服务器（Python 3）
python -m http.server 8000 --bind 0.0.0.0
```

然后在浏览器中访问 `http://localhost:8000`

### 方法2：使用Node.js的http-server

如果已安装Node.js，可以使用http-server：

```bash
# 全局安装http-server（如果尚未安装）
npm install -g http-server

# 进入项目目录
cd /path/to/openhands_testing

# 启动服务器
http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000`

### 方法3：使用Docker

如果您有Docker环境，可以使用Nginx容器来托管网站：

```bash
# 进入项目目录
cd /path/to/openhands_testing

# 运行Nginx容器
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

然后在浏览器中访问 `http://localhost:8080`

## 特性

- **响应式设计**：适配桌面、平板和移动设备
- **现代UI**：采用卡片式布局、渐变色彩和阴影效果
- **交互动画**：包括滚动动画、悬停效果和打字效果
- **数据可视化**：使用CSS实现简单的柱状图表
- **无依赖**：不依赖任何外部JavaScript库（除Font Awesome图标外）

## 未来计划

- 添加后端API连接，实现实时数据更新
- 集成用户登录和个性化推荐功能
- 添加深色模式支持
- 优化页面加载性能
- 增加多语言支持

## 贡献指南

欢迎对本项目进行贡献！您可以通过以下方式参与：

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个Pull Request

## 许可证

本项目采用MIT许可证 - 详情请参见LICENSE文件