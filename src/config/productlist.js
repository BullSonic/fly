var productlist = [
    {
        "id": 101,
        "title": "卓越短信网关模拟器",
        "menuTitle": "短信网关模拟器",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SIM1.81-build-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551111129.gif",
        "desc": `  ·  协议分析器
        1．全中文解析及二进制格式包内容显示
        2．支持多种常用协议协议CMPP v2.0/v3.0 SMGP v1.38 SGIP v1.2 CNGP v2.0 SMPP v3.3
        3．协议分析过滤器，可以设置成仅对关心指令进行记录和分析，其余指令不显示
        4．对历史分析内容清空，方便进行下一组指令分析
         
        
        中国移动CMPP模拟器  [详细信息]
        1.按照CMPP v2.0/v3.0协议实现。支持CONNECT, TERMINATE, SUBMIT, DELIVER, ACTIVE_TEST等消息。
        2.支持多个SP端登录,支持长连接和短连接类型，支持标准CMPP和华为、亚信等接口 
        3.网关模拟器自动生成信息标识(MSGID)
        4.网关模拟器不对SUBMIT各字段的合法性进行判断，真实再现提交的消息内容
        5.可以通过网关模拟器手动订制下发消息，并进行发送
        6.支持状态报告
        7.支持LinkID
        
        中国联通SGIP模拟器  [详细信息]
        1.按照SGIP v1.2协议实现，支持BIND,SUBMIT,DELIVER,UNBIND, REPORT等消息。
        2.支持多个SP端登录,支持长连接和短连接类型，支持标准SGIP接口 
        3.支持双连接工作方式
        4.网关模拟器自动生成序列号(Sequence Number) 
        5.网关模拟器不对SUBMIT各字段的合法性进行判断，真实再现提交的消息内容
        6.支持状态报告
        7.支持LinkID
        
        中国电信小灵通SMGP模拟器  [详细信息]
        1.按照SMGP v3.0 v2.0协议实现。支持LOGIN,SUBMIT,DELIVER，Transaction消息
        2.支持多个SP端登录,支持长连接和短连接类型，支持标准SMGP和中兴接口 
        3. 网关模拟器自动生成短信标识 
        4.全中文解析及二进制格式数据包内容显示, 网关模拟器不对SUBMIT各字段的合法性进行判断，真实再现提交的消息内容
        5.手动订制下发消息
        6.支持状态报告
        
        中国网通CNGP模拟器  [详细信息]
        1.按照CNGP v2.0协议实现，支持LOGIN,SUBMIT,DELIVER，ACTIVETEST,EXIT消息。
        2.支持多个SP端登录,支持长连接和短连接类型，支持标准CNGP和华为接口 
        3.服务端自动生成短信标识
        4.全中文解析及二进制格式数据包内容显示
        5.支持状态报告
        
        短信中心SMPP模拟器  [详细信息]
        1.按照SMPP v3.4协议实现，支持ESME_BNDRCV,ESME_BNDTRN,ESME_UBD,
        ESME_SUB_SM,ESME_DELIVER_SM消息。
        2.支持多个客户端登录,支持长连接和短连接类型，支持标准SMPP和华为接口 
        3.服务端自动生成短信标识 
        4.全中文解析及二进制格式数据包内容显示
        5.支持状态报告
        
        手机模拟终端(正式版功能)
        可以方便的模拟一个或多个手机用户收发消息，并可以进行按脚本执行含有逻辑的压力测试。
        1.发送消息
        2.接收消息
        3.读入脚本(采用任何文本编辑器按格式编辑即可，内容是待发送命令序列)如图5
        4.按脚本执行压力测试
         
        典型应用环境`
    },
    {
        "id": 102,
        "title": "中国电信SMGP短信网关模拟器",
        "menuTitle": "SMGP模拟器",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SIM1.81-build-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551162962.gif",
        "desc": `  ·  1.按照SMGP v3.0 v2.0协议实现。支持LOGIN, SUBMIT, DELIVER, Transaction等消息
        2.支持多个SP端登录,支持长连接和短连接类型，支持标准SMGP和中兴接口 
        3. 网关模拟器自动生成短信标识 
        4.全中文解析及二进制格式数据包内容显示, 网关模拟器不对SUBMIT各字段的合法性进行判断，真实再现提交的消息内容
        5.手动订制下发消息
        6.支持状态报告 `
    },
    {
        "id": 103,
        "title": "卓越短信平台",
        "menuTitle": "卓越短信平台",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SIM1.81-build-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/20057989672.gif",
        "desc": "“卓越短信平台”是一个可连接多个运营商短信网关(移动CMPP,联通SGIP,电信SMGP,网通CNGP)的通用短信平台，为了便于SP进行二次开发，平台和短信业务之间采用数据库作为接口，短信平台把从运营商网关接收到的上行（MO）消息写入到指定的上行消息表中由业务进行逻辑处理,业务则把处理后的下行消息(MT)写入指定的下行消息表中，短信平台则自动从下行消息表读取消息并发送到运营商网关，由此实现整个短信增值业务的处理过程。"
    },
    {
        "id": 104,
        "title": "中国移动Provision接口(商用版)",
        "menuTitle": "Provision接口",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551155505.gif",
        "desc": `      符合MISC 1.6规范的Provision接口，使用TCP/IP技术，可在Windows环境下独立运行，不依赖IIS、Apache或其他Web服务器及各种xml及soap环境的支持,无须任何复杂的配置即可使用。
        商用版采用数据库接口做为二次开发接口，可以和SP的业务很简单的融合在一起。`
    },
    {
        "id": 105,
        "title": "SMSC/SMPP Simulator",
        "menuTitle": "SMSC Simulator",
        "price": "tronjin21+service@gmail.com",
        "local_link": "+ 本地下载",
        "local_url": "",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/2006102076990.jpg",
        "desc": ` ·  The SMSC Simulator product include 3 parts.

        The SMPP Decoder is a professional tool that you can use it to display 
    SMPP 3.4 messages for detailed analysis.
    
        The SMSC Simulator is a service for near-to-live testing of your SMPP 
    applications without need of access to real SMSC. The application behaves 
    as a real SMSC with SMPP interface, your application can bind to it,
    submit_sm, deliver_sm, unbind etc., however nothing will get delivered 
    anywhere as all the responses are only made-up by the Simulator. It also 
    supports multiple connection but the authentication information is ignored.
    
        The Mobile Server is a simulator, since the SMSC Simulator can't send real 
    short message to Mobile user, so it will forward short message between SMSC
    and mobile phone simulator(full version include).`
    },
]

var productList = {
    "101": {
        "title": "title101",
        "menuTitle": "短信网关模拟器",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SIM1.81-build-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551111129.gif",
        "desc": `101.md`
    },
    "102": {
        "title": "title102",
        "menuTitle": "SMGP模拟器",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SIM1.81-build-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551162962.gif",
        "desc": `102.md`
    },
    "103": {
        "title": "title103",
        "menuTitle": "卓越短信平台",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SMSPF 2.1 Trial.rar",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/20057989672.gif",
        "desc": "103.md"
    },
    "104": {
        "title": "title104",
        "menuTitle": "Provision接口",
        "price": "请联系我们",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/Provision 1.0.rar",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/200551155505.gif",
        "desc": `104.md`
    },
    "105": {
        "title": "title105",
        "menuTitle": "SMSC Simulator",
        "price": "tronjin21+service@gmail.com",
        "local_link": "+ 本地下载",
        "local_url": "/Download/Trial/SMSCSimulatorTrial-2022.zip",
        "remote_link": "+ 其它网站下载",
        "remote_url": "",
        "picUrl": "/Admin/pic/2006102076990.jpg",
        "desc": `105.md`
    },
}

export default productlist
export { productList }