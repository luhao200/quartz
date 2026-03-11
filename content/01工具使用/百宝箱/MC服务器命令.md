|                   |                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| 下载wget、vim、screen | yum install wget<br><br>yum install vim<br><br>yum install screen                                          |
| java版本            | java -version                                                                                              |
| 服务器外网             | 111.231.2.155                                                                                              |
|                   | chmod 755 start.sh<br><br>chmod 755 stop.sh<br><br>chmod 755 autoDayBackup.sh<br><br>chmod 755 scrStart.sh |
| 赋予权限启动服务端脚本       | chmod +x start.sh                                                                                          |
| 运行启动服务端脚本         | sh ./start.sh                                                                                              |
| 运行自动备份脚本          | sh ./autoDayBackup.sh                                                                                      |
| 新建窗口              | screen -S server                                                                                           |
| 回到窗口              | screen -r server                                                                                           |
| 回到窗口              | screen -x 31192                                                                                            |
| 窗口列表              | screen -ls                                                                                                 |
| 彻底关闭窗口            | screen -S 4070 -X quit                                                                                     |
| 创建自动运行配置文件        | crontab -e                                                                                                 |
| 每天02:30关服         | 30 02 * * * sh ./stop.sh                                                                                   |
| 每天04:00备份         | 00 04 * * * sh ./autoDayBackup.sh                                                                          |
| 每天06:00开服         | 00 06 * * * sh ./scrStart.sh                                                                               |
| 关闭服务端             | Ctrl+C                                                                                                     |
