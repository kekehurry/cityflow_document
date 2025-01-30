---
slug: /install
sidebar_position: 1
title: Installation
author: kaihu
---

# Installation Guide / 安装指南

## 1. Environment Preparation  / 环境准备

### 1. Install Docker  / 安装Docker

**Windows/macOS**:  
  
  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/) / 从[Docker Desktop](https://www.docker.com/products/docker-desktop/)官网下载安装包安装

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. Verify Installation / 确认安装

```bash
docker --version
```

## 2. Quick Installation / 快速安装

### 1. Startup Command  / 启动命令

**Windows (PowerShell)**
```bash
# Linux/macOS
docker run -d --name cityflow_platform \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code \
  ghcr.io/kekehurry/cityflow_platform:latest
```

**Windows/macOS**: 

```bash
docker run -d --name cityflow_platform `
  -p 3000:3000 `
  -v /var/run/docker.sock:/var/run/docker.sock `
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code `
  ghcr.io/kekehurry/cityflow_platform:latest
```

### 2. Pre-download Dependency (Optional) / 预下载依赖（可选）

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

## 3. Troubleshooting / 常见问题

### Q1: Where is data stored?  / 数据存储在哪里？

- Temperotal code/临时代码: `/cityflow_platform/cityflow_executor/code`

- Data folder/数据文件夹: `/cityflow_platform/cityflow_database/data` 

- Statics folder/静态文件夹: `/cityflow_platform/cityflow_database/source`

**⚠️ Note: Mounting the temperotal code folder is needed to run the platform/ 注意：运行平台时必须挂载临时代码文件夹**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: How to update?/ 如何更新？

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
If you want to keep the data / 如果您想保留数据:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Q3: Port 3000 unavailable? / 端口3000不可用？
Try different port mapping / 尝试不同的端口映射:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: How to report issues / 如何提交问题?

Submit issues on GitHub / 在GitHub上提交: 

https://github.com/kekehurry/cityflow_platform


**Documentation/文档: [Cityflow Document (WIP)](https://doc.cityflow.cn/)**