---
slug: /install
sidebar_position: 2
title: 安装指南
author: kaihu
---

# 安装指南

## 1. 环境准备

### 1. 安装Docker

**Windows/macOS**:  
  
  - 从[Docker Desktop](https://www.docker.com/products/docker-desktop/)官网下载安装包安装

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. 确认安装

```bash
docker --version
```

## 2. 快速安装

### 1. 启动命令

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

### 2. 预下载依赖（可选）

CityFlow 平台的 Docker 容器会自动下载最新版本的 CityFlow Runner 以执行 Python 和 JavaScript 代码。你也可以手动下载：

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

最新的 CityFlow Runner 镜像仅包含 CityFlow 平台所需的最小依赖项。为了获得更完整的环境，建议下载完整版，其中包含城市研究中常用的软件包。你也可以之后在CityFlow 平台内安装你需要的依赖包。

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:full
```

### 3. 镜像拉取替代方案

如果在中国下载`ghcr.io`镜像遇到网络问题，可尝试使用南京大学镜像加速：

```bash
docker pull ghcr.nju.edu.cn/kekehurry/cityflow_runner:full
```

下载完成后将镜像仓库名称改为`ghcr.io`,或者在工作流设置界面，将镜像名称改为南京大学镜像。

```bash
docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:latest ghcr.io/kekehurry/cityflow_runner:latest

docker image tag ghcr.nju.edu.cn/kekehurry/cityflow_runner:full ghcr.io/kekehurry/cityflow_runner:full
```

使用南京大学镜像拉取并启动cityflow platform:

```bash
docker run -d --name cityflow_platform \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ${PWD}/temp:/cityflow_platform/cityflow_executor/code \
  ghcr.nju.edu.cn/kekehurry/cityflow_platform:latest
```

## 3. 常见问题

### Q1: 数据存储在哪里？

- 临时代码: `/cityflow_platform/cityflow_executor/code`

- 数据文件夹: `/cityflow_platform/cityflow_database/data` 

- 静态文件夹: `/cityflow_platform/cityflow_database/source`

**⚠️ 注意：运行平台时必须挂载临时代码文件夹**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: 如何更新？

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
如果您想保留数据:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Q3: 端口3000不可用？
尝试不同的端口映射:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: 如何提交问题?

在GitHub上提交: 

https://github.com/kekehurry/cityflow_platform


**文档: [Cityflow Document (WIP)](https://doc.cityflow.cn/)**