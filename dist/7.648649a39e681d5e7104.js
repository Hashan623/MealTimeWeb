(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0KVQ":function(n,o){n.exports='<div class="login-page" [@routerTransition]>\n    <div class="row justify-content-md-center">\n        <div class="col-md-4">\n            <img src="assets/images/logo.png" width="150px" class="user-avatar" />\n            <h1>MealTime QA</h1>\n            <form role="form">\n                <div class="form-content">\n                    <div class="form-group">\n                        <input type="text" ng-model="name" class="form-control input-underline input-lg" id="name" placeholder="Email">\n                    </div>\n\n                    <div class="form-group">\n                        <input type="password" class="form-control input-underline input-lg" id="password" placeholder="Password">\n                    </div>\n                </div>\n                <a class="btn rounded-btn" [routerLink]="[\'/dashboard\']" (click)="onLoggedin()"> Log in </a>\n                &nbsp;\n                <a class="btn rounded-btn" [routerLink]="[\'/signup\']">Register</a>\n            </form>\n        </div>\n    </div>\n</div>\n'},X3zk:function(n,o,e){"use strict";e.r(o);var t=e("CcnG"),r=e("Ip0R"),i=e("ZYCi"),a=e("ZZ88"),p=function(n,o,e,t){var r,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,o,e,t);else for(var p=n.length-1;p>=0;p--)(r=n[p])&&(a=(i<3?r(a):i>3?r(o,e,a):r(o,e))||a);return i>3&&a&&Object.defineProperty(o,e,a),a},l=function(n,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,o)},c=function(){function n(n){this.router=n}return n.prototype.ngOnInit=function(){},n.prototype.onLoggedin=function(){localStorage.setItem("isLoggedin","true")},n=p([Object(t.Component)({selector:"app-login",template:e("0KVQ"),styles:[e("ZTFi")],animations:[Object(a.a)()]}),l("design:paramtypes",[i.b])],n)}(),d=function(n,o,e,t){var r,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,o,e,t);else for(var p=n.length-1;p>=0;p--)(r=n[p])&&(a=(i<3?r(a):i>3?r(o,e,a):r(o,e))||a);return i>3&&a&&Object.defineProperty(o,e,a),a},g=[{path:"",component:c}],s=function(){function n(){}return n=d([Object(t.NgModule)({imports:[i.c.forChild(g)],exports:[i.c]})],n)}();e.d(o,"LoginModule",function(){return f});var u=function(n,o,e,t){var r,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,o,e,t);else for(var p=n.length-1;p>=0;p--)(r=n[p])&&(a=(i<3?r(a):i>3?r(o,e,a):r(o,e))||a);return i>3&&a&&Object.defineProperty(o,e,a),a},f=function(){function n(){}return n=u([Object(t.NgModule)({imports:[r.b,s],declarations:[c]})],n)}()},ZTFi:function(n,o){n.exports=":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n"}}]);