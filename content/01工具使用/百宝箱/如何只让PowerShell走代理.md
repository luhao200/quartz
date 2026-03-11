PowerShell 配置文件默认不存在，需要手动创建。以下是完整的创建和配置步骤：

## 1. 编辑配置文件

```powershell
# 使用记事本编辑
notepad $PROFILE
```

## 2. 在配置文件中添加代理设置

将以下内容添加到配置文件中：

```powershell
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"
$env:ALL_PROXY = "socks5://127.0.0.1:7890"
```
