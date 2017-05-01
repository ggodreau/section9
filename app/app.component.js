System.register(['angular2/core', './post.service', './github.service', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, github_service_1, http_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService, _gitService) {
                    this._postService = _postService;
                    this._gitService = _gitService;
                    this.followers = [];
                    this.user = "";
                    this._postService.createPost();
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._gitService.getUser(), this._gitService.getFollowers()).subscribe(function (res) {
                        _this.followers = res[1],
                            _this.user = res[0];
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n        .avatar {\n            border : 2px solid black;\n            height: 50px;\n            width: 50px;\n            border-radius: 10px;\n        }\n    "],
                        template: "\n        <h1>PPHP</h1>\n        <input type=\"text\">\n        <div>{{ user.avatar_url }}</div>\n        <div *ngFor=\"#follower of followers\">\n            <div class=\"media-left\">\n                <img class=avatar src=\"{{follower.avatar_url}}\">\n            </div>\n            <div class=\"media-body\">\n                {{follower.login}}\n            </div>\n        </div>\n    ",
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS, github_service_1.GitService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, github_service_1.GitService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map