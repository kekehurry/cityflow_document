---
slug: /install
sidebar_position: 1
title: Installation
author: kaihu
---

# Installation Guide

## 1. Environment Preparation

### 1. Install Docker

**Windows/macOS**:  
  
  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)

**Linux**:  
  ```bash
  sudo apt-get update && sudo apt-get install docker.io
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  newgrp docker
  ```

### 2. Verify Installation

```bash
docker --version
```

## 2. Quick Installation

### 1. Startup Command

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

### 2. Pre-download Dependency (Optional)

```bash
docker pull ghcr.io/kekehurry/cityflow_runner:latest
```

## 3. Troubleshooting

### Q1: Where is data stored?

- Temperotal code: `/cityflow_platform/cityflow_executor/code`

- Data folder: `/cityflow_platform/cityflow_database/data` 

- Statics folder: `/cityflow_platform/cityflow_database/source`

**Note: Mounting the temperotal code folder is needed to run the platform**

```bash
-v /your/local/path:/cityflow_platform/cityflow_executor/code
```

### Q2: How to update?

```bash
docker stop cityflow_platform
docker rm cityflow_platform
docker pull ghcr.io/kekehurry/cityflow_platform:latest
# Re-run startup command
```
If you want to keep the data:

```bash
-v /your/local/path:/cityflow_platform/cityflow_database/data
-v /your/local/path:/cityflow_platform/cityflow_database/source
-e INIT_DATABASE=false
```


### Port 3000 unavailable?
Try different port mapping:

```bash
-p 8080:3000  # Use host port 8080
```

### Q4: How to report issues?

Submit issues on GitHub: 

https://github.com/kekehurry/cityflow_platform


Documentation: [Cityflow Document (WIP)](https://doc.cityflow.cn/)