System.register(['rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/posts";
                }
                PostService.prototype.getPosts = function () {
                    return this._http.get("http://jsonplaceholder.typicode.com/posts")
                        .map(function (res) { return res.json(); });
                };
                PostService.prototype.createPost = function (post) {
                    return this._http.post(this._url, JSON.stringify(post))
                        .map(function (res) { return res.json(); });
                };
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map