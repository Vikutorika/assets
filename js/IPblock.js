var bannedips=["171.110.239.184", 
"222.217.145.244", 
"180.140.113.217", 
"171.110.238.234", 
"222.217.145.33", 
"171.106.205.71", 
"10.101.41.5",
"171.110.238.94",
"222.217.144.226",
"117.183.0.241",
"10.101.41.4",
"117.183.0.241",
"111.58.168.227",
"111.58.168.111", 
"220.173.125.83", 
"222.83.150.92", 
"171.106.203.19",
"113.14.130.128",
"113.14.130.19"]
var ip = '<!--#echo var="REMOTE_ADDR"-->'
var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
alert("你的IP在本站的防火墙内，你无法访问本网站。这意味着你的IP可能在本网站做过包括但不限于以下事件：发布广告、发布违法内容等\n你需要访问本网站，请联系admin@bili33.top进行封禁解除！")
window.location.replace("about:blank")
}