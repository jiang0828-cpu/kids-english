# 🚀 部署指南

## 快速部署步骤

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`kids-english`
3. 选择 **Public**
4. 点击 **Create repository**

### 2. 上传代码

在终端中执行以下命令（替换 [你的用户名] 为你的 GitHub 用户名）：

```bash
cd "d:\DEMOtrae SET\DEMOtrae3\kids-english"

# 初始化仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/[你的用户名]/kids-english.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 打开你的 GitHub 仓库页面
2. 点击 **Settings** 标签
3. 左侧菜单点击 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source** 选择 **GitHub Actions**
5. 等待 2-3 分钟，网站会自动部署

### 4. 访问网站

部署完成后，你的网站地址将是：
```
https://[你的用户名].github.io/kids-english
```

---

## 备选方案：直接上传文件

如果你不想使用 Git 命令，可以直接上传：

1. 在 GitHub 仓库页面，点击 **uploading an existing file**
2. 选择 `kids-english` 文件夹中的所有文件
3. 点击 **Commit changes**
4. 然后按照步骤3启用 GitHub Pages

---

## 验证部署

部署成功后，你可以：
- 在手机、平板、电脑上访问网站链接
- 分享给朋友和家人
- 孩子可以随时随地学习英语

---

## 更新网站

当你修改代码后，重新部署：

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions 会自动重新部署网站。
