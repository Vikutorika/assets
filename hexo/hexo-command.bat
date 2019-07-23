@echo off
title hexo命令控制台(Produced by GamerNoTitle)
cls
:mode
cls
@echo [1]新建hexo文章(hexo new "<Blog Name>")
@echo [2]新建hexo页面(hexo new page "<Page Name>")
@echo [3]发行hexo页面(hexo publish)
@echo [4]生成hexo静态页面到Public目录(hexo generate)
@echo [5]启动hexo本地服务预览(hexo server)
@echo [6]部署hexo到网站(hexo deploy) [Notice:你需要到_config.yml内先设置仓库地址等信息]
@echo [7]清除public文件夹及缓存(hexo clean)
@echo [0]退出
set /p mode=请输入你的指令（输入错误指令将结束程序!）：
if %mode% == 1 goto new
if %mode% == 2 goto newp
if %mode% == 3 goto pub
if %mode% == 4 goto gen
if %mode% == 5 goto server
if %mode% == 6 goto deploy
if %mode% == 7 goto clean
if %mode% == 0 exit
exit

:new
set /p name=请输入新文章的名字：
hexo new "%name%"
@echo New Article Has been Added! Press any Key to Contiune
pause
goto mode

:newp
set /p name=请输入新页面的名字：
hexo new page "%name%"
@echo New Page Has been Added! Press any Key to Contiune
goto mode

:pub
hexo publish
@echo Publish Process Finished! Press any Key to Contiune
pause
goto mode

:gen
hexo generate
@echo Generate Process Finished! Press any Key to Contiune

:server
@echo [1]标准模式：Hexo 会监视文件变动并自动更新，您无须重启服务器
@echo [2]静态模式：Hexo 静态模式
@echo [3]端口模式：Hexo 本地端口可修改
@echo [4]IP模式：Hexo 本地IP可修改
@echo [0]返回模式选择
set /p server-mode=请选择hexo server模式：
if %server-mode% == 1 hexo server
if %server-mode% == 2 hexo server -s
if %server-mode% == 3 goto server-port
if %server-mode% == 4 goto server-ip
goto server

:server-port
set /p port=请输入端口：
hexo server -p %port%
goto mode

:server-ip
set /p ip=请输入IP：
hexo server -i %ip%
goto mode

:deploy
hexo deploy
@echo Deploy Process Finished! Press any Key to Contiune
pause
goto mode

:clean
hexo clean
@echo Public And Cache Have been Cleared! Press any Key to Contiune
pause
goto mode