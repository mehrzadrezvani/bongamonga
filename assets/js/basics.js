/**
 * Ajax requests and variables
 */
var postRequestVar = true;
var putRequestVar = true;
var deleteRequestVar = true;
var getRequestVar = true;
var getRequestHtmlVar = true;
function postRequest(el,type){
    loader('show');
    info = window[type](el);
    if(postRequestVar){
        postRequestVar = false;
        $.ajax({
            type: 'POST',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {"Content-Type":"application/json"},
            error: function() {
                loader('hide');
                postRequestVar = true;
            },
            success: function(response) {
                loader('hide');
                postRequestVar = true;
                window[type+'Res'](response,info['params']);
                info = false;
            }
        })
    }
}
function putRequest(el,type){
    loader('show');
    info = window[type](el);
    if(putRequestVar){
        putRequestVar = false;
        $.ajax({
            type: 'PUT',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {"Content-Type":"application/json"},
            error: function() {
                loader('hide');
                putRequestVar = true;
            },
            success: function(response) {
                loader('hide');
                putRequestVar = true;
                window[type+'Res'](response,info['params']);
                info = false;
            }
        })
    }
}
function deleteRequest(el,type){
    loader('show');
    info = window[type](el);
    if(deleteRequestVar) {
        deleteRequestVar = false;
        $.ajax({
            type: 'DELETE',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {"Content-Type": "application/json"},
            error: function() {
                loader('hide');
                deleteRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                deleteRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}
function getRequest(el,type){
    loader('show');
    info = window[type](el);
    if(getRequestVar) {
        getRequestVar = false;
        $.ajax({
            type: 'GET',
            url: info['url'],
            data: info['information'],
            datatype: "json",
            headers: {"Content-Type": "application/json"},
            error: function() {
                loader('hide');
                getRequestVar = true;
            },
            success: function (response) {
                loader('hide');
                getRequestVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}
function getRequestHtml(el,type){
    loader('show');
    info = window[type](el);
    if(getRequestHtmlVar) {
        getRequestHtmlVar = false;
        $.ajax({
            type: 'GET',
            url: info['url'],
            data: info['information'],
            datatype: "html",
            headers: {},
            error: function() {
                loader('hide');
                getRequestHtmlVar = true;
            },
            success: function (response) {
                loader('hide');
                getRequestHtmlVar = true;
                window[type + 'Res'](response, info['params']);
                info = false;
            }
        })
    }
}


function notify(message, type)
{
    $('div.alert-box').find('p').html(message);
    $('div.alert-box').attr("class", 'alert-box callout ' + type);
    $('div.alert-box').show();
    // Alert time out
    setTimeout(function(){
        $('div.alert-box').fadeOut();
    }, 3000);
}


function loader(type)
{
    if(type === 'show'){
        $('.loading').show(0);
    }else{
        $('.loading').fadeOut(250);
    }
}

window.alert = function(msg) {
    $('.alert').find('p').html(msg);
    $('.alert').show(0);
};
