#!/bin/bash

# 设置项目环境
echo "Setting up AITechHub project environment..."

# 确保在正确的目录中
cd /workspace

# 安装依赖（如果有的话）
if [ -f "package.json" ]; then
  echo "Installing npm dependencies..."
  npm install
fi

# 启动HTTP服务器
echo "Starting HTTP server on port 12001..."
python -m http.server 12001 --bind 0.0.0.0