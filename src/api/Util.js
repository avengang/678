/**
 * Created by Administrator on 2017/4/7 0007.
 */
import axios from 'axios'
import config from './config'

axios.defaults.timeout = 15000;//设置axios的请求超时时间为7000毫秒

/**
 * 请求后台接口方法
 * @param URL
 * @param conf
 * @returns {*}
 */
var request = function(URL, conf) {

    var params = conf.params;//请求参数
    var successFn = conf.successFn;//200状态码回调方法
    var failFn = conf.failFn;//请求失败或者非200状态码回调方法
    var _this = conf.scope;
    var dealSelf = conf.dealSelf || false;//是否直接返回axios请求对象
    var urlParam = conf.urlParam || "";//路径后面是否跟参数，接收人下载列表请求地址需要用这种方式

    var paramInfo = config.getParamInfo(URL);//获取对应接口的请求链接和方式（get/post）

    var resp = null;

    if(paramInfo.method == 'get') {
        resp = axios.get(config.baseURL+paramInfo.url+urlParam, params, { headers: { 'Content-Type': 'application/json' }});
    } else {
        resp = axios.post(config.baseURL+paramInfo.url+urlParam, params, { headers: { 'Content-Type': 'application/json' }});
    }

    if(dealSelf) return resp;

    if(!resp) return;
    resp.then(function (res) {

        var response = res.data;
        successFn && successFn(response.data||response);
    }).catch(function (error) {

        console.error(error);
        _this.Util.responseStatusProcessor(_this, -1);//提示请求失败
        failFn && failFn(error);
    });
};

/**
 * 检查是否登录，如果登录就执行successFn回调，否则进入登录页面
 * @param router
 * @param successFn
 */
var checkLogin = function(router, successFn) {

    if(!sessionStorage.getItem("user")) {
        router.push({name: '登录'});
    } else {
        successFn && successFn();
    }
};

/**
 * 下载文件
 * @param url：文件的下载路径
 */
var downloadFile = function(url) {
    try{
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    }catch(e){

    }
};

/**
 * 判断obj是否为空值或者空数组，如果为空就返回true并弹出必填提示框
 * @param _this：当前vue对象
 * @param obj：被测试对象
 * @param name：提示语
 * @returns {boolean}：是否为空值或者空数组
 */
var _require = function (_this, obj, name) {

    var flag = false;

    if(obj instanceof Array) {

        if(obj.length == 0) {
            flag = true;
        }
    } else if(typeof(obj) == 'string') {

        if(!obj.trim())
            flag = true;
    }
    flag && (
        _this.$notify({
            title: '错误',
            message: name+"为必填项",
            offset: 100,
            type: 'error'
        })
    );
    return flag;
};

/**
 * info类型提示框
 * @param _this：vue实例对象
 * @param msg：提示语
 */
var info = function (_this, msg) {

    _this.$notify({
        title: '提示',
        message: msg,
        offset: 100,
        type: 'info'
    });
};

/**
 * error类型提示框
 * @param _this：vue实例对象
 * @param msg：提示语
 */
var error = function (_this, msg) {

    _this.$notify({
        title: '错误',
        message: msg,
        offset: 100,
        type: 'error'
    });
};

/**
 * warning类型提示框
 * @param _this：vue实例对象
 * @param msg：提示语
 */
var warning = function (_this, msg) {

    _this.$notify({
        title: '警告',
        message: msg,
        offset: 100,
        type: 'warning'
    });
};

/**
 * response状态码处理
 * @param _this：vue实例对象
 * @param code：状态值
 * @param type：提示类型，如果没有传值则默认为error
 */
var responseStatusProcessor = function(_this, code, type) {

    var msg = "";
    switch(+code) {
        case 500:
            msg = "服务器端错误";
            break;
        case 300:
            msg = "您处于未登录状态";
            sessionStorage.removeItem("user");
            type = "warning";
            _this.$router.push({name: "登录"});
            window.location.reload();
            break;
        case 301:
            msg = "请求数据非法";
            break;
        case 302:
            msg = "您不是管理员用户";
            type = "warning";
            _this.$router.push({name: "发送方数据列表"});
            break;
        case 303:
            msg = "该单号不属于您";
            type = "warning";
            sessionStorage.removeItem("beforeLogin");
            sessionStorage.removeItem("beforeLoginParams");
            _this.recordInfo = {};
            _this.processInfo = {};
            _this.$router.push({name: "登录"});
            window.location.reload();
            break;
        case 400:
            msg = "该单号不存在";
            type = "warning";
            break;
        case 401:
            msg = "审批人不存在";
            type = "warning";
            break;
        case 402:
            msg = "非法审批人";
            break;
        case 701:
            msg = "服务器请求失败";
            break;
        case 702:
            msg = "超过下载次数限制";
            break;
        case 704:
            msg = "未在有效的时间范围 不允许下载";
            break;
        case 801:
            msg = "账号在其他地方登录";
            sessionStorage.removeItem("user");
            _this.$router.push({name: "登录"});
            window.location.reload();
            break;
        case 501:
            msg = "抱歉，您没有权限做次操作";
            type = "warning";
            break;
        case 502:
            msg = "账号或密码错误";
            break;
        case -1:
            msg = "请求失败";
            break;
        default:
            msg = code
    }
console.log(msg);
};

var copy = function (arr) {

    return arr.map((e)=>{

        if(typeof e === 'object') {
            return Object.assign({},e)
        } else{
            return e
        }
    })
};

/**
 * 格式化时间为 yyyy-MM-dd HH:mm:ss
 * @param val
 * @returns {string}
 */
var formatDate1 = function (val) {

    return val.getFullYear()+"-"+(val.getMonth()+1)+"-"+val.getDate()+" "+val.getHours()+":"+val.getMinutes()+":"+val.getSeconds();
};

var numberFactory = function () {

    if(!window.index) {
        window.index = 1;
    }
    return window.index++;
}

export default
{
    request,
    checkLogin,
    downloadFile,
    responseStatusProcessor,
    info,
    warning,
    error,
    copy,
    formatDate1,
    _require,
    numberFactory
}
