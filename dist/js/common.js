let server = "http://localhost:8080";
//let server="http://api.ozhousemm.com";
function ajaxRequest(method, url, data, async, successCallback, errorCallback) {
    //freezePage();
    $.ajax({
        method: method,
        url: url,
        data: data,
        contentType: "application/json;charset=utf-8",
        async: async, // 指定请求类型（异步或同步）
        success: function (response) {
            //unfreezePage();
            if (successCallback) {
                successCallback(response);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //unfreezePage();
            if (errorCallback) {
                errorCallback(jqXHR, textStatus, errorThrown);
            }
        }
    });
}

// 使用示例 - 异步请求
/*
function onSuccess(response) {
    console.log("成功：", response);
}
function onError(jqXHR, textStatus, errorThrown) {
    console.log("错误：", textStatus);
}
*/
//makeAjaxRequest("GET", "your-server.com/api/data", null, true, onSuccess, onError);

// 使用示例 - 同步请求
/*
function processResponse(response) {
    console.log("同步响应：", response);
}
*/
//makeAjaxRequest("GET", "your-server.com/api/data", null, false, processResponse);
/*
function freezePage() {
    $('body').append('<div id="loading-overlay">loading</div>');
    $('#loading-overlay').fadeIn();
}

function unfreezePage() {
    $('#loading-overlay').fadeOut(function() {
        $(this).remove();
    });
}
*/
/**
 * 获取现在年份
 * @returns 
 */
function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
}
