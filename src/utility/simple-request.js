/**
 * Created by wizard on 16/4/1.
 */

const timeoutLimit = 30 * 1000;

const SRequest = SRequest || (()=> {
    let that = {};

    that.get = function (baseURL, handlerURL, params, cb) {
        var xhr = new XMLHttpRequest();

        var paramStr = "";
        if (params) {
            let isStart = true;
            for (var index in params) {
                if (isStart) {
                    isStart = false;
                    paramStr += "?";
                }
                else {
                    paramStr += "&";
                }
                paramStr += index + "=" + params[index];
            }
        }
        console.log("get string: " + baseURL + handlerURL + paramStr);

        xhr.open("GET", baseURL + handlerURL + paramStr, true);
        xhr.timeout = timeoutLimit;
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            if (cb) {
                cb.call(this, data);
            }
        }
        xhr.ontimeout = function () {
            if (cb) {
                cb.call(this, {timeout: true});
            }
        }
        xhr.send();
    }

    that.post = function (baseURL, handlerURL, params, cb) {

        var xhr = new XMLHttpRequest();   // new HttpRequest instance
        xhr.open("POST", baseURL + handlerURL, true);
        xhr.timeout = timeoutLimit;
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            if (cb) {
                cb.call(this, data);
            }
        }
        xhr.ontimeout = function () {
            if (cb) {
                cb.call(this, {timeout: true});
            }
        }
        xhr.send(JSON.stringify(params));
    }

    return that;
})();

export default SRequest;