---
url: https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md
---
## 工作流

### 简化

/opsx:explore
/opsx:propose
/opsx:apply
/opsx:archive

### 详细

/opsx:explore
/opsx:new
/opsx:continue（可选）/opsx:ff
/opsx:apply
/opsx:verify（可选）
/opsx:archive

### 注意

/opsx:propose = /opsx:new + /opsx:ff
/opsx:verify 会在 /opsx:archive 时执行

## 终端

openspec view
openspec init

## 命令

| Command  命令     | Purpose  目的                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| `/opsx:explore` | Think through ideas before committing to a change  <br>在决定改变之前，请仔细考虑各种想法。        |
| `/opsx:propose` | Create a change and generate planning artifacts in one step  <br>一步完成变更创建和规划文档生成 |
| `/opsx:apply`   | Implement tasks from the change  <br>执行变更中的任务                                    |
| `/opsx:archive` | Archive a completed change  <br>归档已完成的更改                                         |

| Command  命令          | Purpose  目的                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `/opsx:new`          | Start a new change scaffold  <br>启动新的变革框架                                 |
| `/opsx:continue`     | Create the next artifact based on dependencies  <br>根据依赖关系创建下一个工件         |
| `/opsx:ff`           | Fast-forward: create all planning artifacts at once  <br>快速推进：一次性创建所有规划文档 |
| `/opsx:verify`       | Validate implementation matches artifacts  <br>验证实现是否与工件相符                |
| `/opsx:sync`         | Merge delta specs into main specs  <br>将增量规范合并到主规范中                       |
| `/opsx:bulk-archive` | Archive multiple changes at once  <br>一次性归档多个更改                           |
| `/opsx:onboard`      | Guided tutorial through the complete workflow  <br>引导式教程，带您了解完整的工作流程      |
