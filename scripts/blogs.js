var apiPrefix = "http://sabioapi2.azurewebsites.net";

insert = function (data, onSuccess, onError) {
    var url = apiPrefix + "/api/blogs/";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);

}

commentPost = function (data, onSuccess, onError) {
    var url = apiPrefix + "/api/comments/";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"

    };

    $.ajax(url, settings);
}

authorPost = function(data, onSuccess, onError) {
    var url = apiPrefix + "/api/authors/";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);
}

update = function (id, data, onSuccess, onError) {

    var url = apiPrefix + "/api/blogs/" + id;
    var settings = {
        cache: false
    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    , data: data
    , dataType: "json"
    , success: onSuccess
    , error: onError
    , type: "PUT"
    };

    $.ajax(url, settings);

}

get = function (onAjaxSuccess, onAjaxError) {
    var url = apiPrefix + "/api/blogs/";
    var settings = {
        cache: false
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , dataType: "json"
            , success: onAjaxSuccess
            , error: onAjaxError
            , type: "GET"
    };

    $.ajax(url, settings);

}

getById = function (id, onSuccess, onError) {

    var url = apiPrefix + "/api/blogs/" + id;
    var settings = {
        cache: false
    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    , dataType: "json"
    , success: onSuccess
    , error: onError
    , type: "GET"
    };

    $.ajax(url, settings);

}

getByAuthorId = function(id, onSuccess, onError) {
    var url = apiPrefix + "/api/authors/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        ,type: "GET"
    };

    $.ajax(url, settings);
}

commentsByBlog = function (id, onSuccess, onError) {

    var url = apiPrefix + "/api/blogs/" + id + "/comments";
    var settings = {
        cache: false
    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    , dataType: "json"
    , success: onSuccess
    , error: onError
    , type: "GET"
    };

    $.ajax(url, settings);

}

erase = function (id, onSuccess, onError) {


    var url = apiPrefix + "/api/blogs/" + id;
    var settings = {
        cache: false
    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    , dataType: "json"
    , success: onSuccess
    , error: onError
    , type: "DELETE"
    };

    $.ajax(url, settings);

}

getLocal = function (name, onAjaxSuccess, onAjaxError) {
    var url = "json/" + (name || "simple") +".json";
    var settings = {
        cache: false
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , dataType: "json"
            , success: onAjaxSuccess
            , error: onAjaxError
            , type: "GET"
    };

    $.ajax(url, settings);

}