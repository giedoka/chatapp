webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-full-width\">\n  <div class=\"md-8 columns conversation-window\">\n    <app-conversation-window [conversation]=\"selectedConversation\"></app-conversation-window>\n  </div>\n  <div class=\"md-4 columns main-sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conversation-window {\n  width: calc(100% - 300px);\n  max-width: calc(100% - 300px);\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(100% - 300px);\n          flex: 0 0 calc(100% - 300px);\n  position: relative; }\n\n.main-sidebar {\n  background-color: #222C3C;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  height: 100vh;\n  width: 300px;\n  max-width: 300px;\n  position: absolute;\n  right: 0;\n  top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__ = __webpack_require__("../../../../../src/app/shared/conversations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(conversationsService) {
        this.conversationsService = conversationsService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationsService.selectedConversation.subscribe(function (conversation) {
            _this.selectedConversation = conversation;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__["a" /* ConversationsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_window_conversation_window_component__ = __webpack_require__("../../../../../src/app/conversation-window/conversation-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_conversations_list_conversations_list_component__ = __webpack_require__("../../../../../src/app/sidebar/conversations-list/conversations-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_conversations_list_single_conversation_single_conversation_component__ = __webpack_require__("../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__conversation_window_message_input_message_input_component__ = __webpack_require__("../../../../../src/app/conversation-window/message-input/message-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conversation_window_active_conversation_active_conversation_component__ = __webpack_require__("../../../../../src/app/conversation-window/active-conversation/active-conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_conversations_service__ = __webpack_require__("../../../../../src/app/shared/conversations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__conversation_window_conversation_window_component__["a" /* ConversationWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_conversations_list_conversations_list_component__["a" /* ConversationsListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_conversations_list_single_conversation_single_conversation_component__["a" /* SingleConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__conversation_window_message_input_message_input_component__["a" /* MessageInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__conversation_window_active_conversation_active_conversation_component__["a" /* ActiveConversationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_conversations_service__["a" /* ConversationsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/conversation-window/active-conversation/active-conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-12 columns\">\n  <ul class=\"messages-list\" *ngIf=\"activeConversation\">\n    <li *ngFor=\"let message of activeConversation.messages\">{{ message.content }}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/conversation-window/active-conversation/active-conversation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \" \";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.clear-list, .messages-list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.align-right {\n  text-align: right; }\n\n.hide,\n.hidden,\n.template,\n.invisible {\n  display: none !important; }\n\n.caret-up:before {\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1);\n  display: inline-block;\n  vertical-align: text-top; }\n\n.handle {\n  cursor: move; }\n\n.image-overflow-container {\n  overflow-x: hidden;\n  overflow-y: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conversation-window/active-conversation/active-conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__ = __webpack_require__("../../../../../src/app/shared/conversation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActiveConversationComponent = (function () {
    function ActiveConversationComponent() {
    }
    ActiveConversationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__["a" /* Conversation */])
    ], ActiveConversationComponent.prototype, "activeConversation", void 0);
    ActiveConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-active-conversation',
            template: __webpack_require__("../../../../../src/app/conversation-window/active-conversation/active-conversation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conversation-window/active-conversation/active-conversation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveConversationComponent);
    return ActiveConversationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/conversation-window/conversation-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"sm-12\">\n    <div class=\"active-conversation\">\n      <app-active-conversation [activeConversation]=\"conversation\"></app-active-conversation>\n    </div>\n    <div class=\"message-box\">\n      <app-message-input [activeConversation]=\"conversation\"></app-message-input>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/conversation-window/conversation-window.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-conversation {\n  height: calc(100vh - 40px);\n  width: 100%; }\n\n.message-box {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  padding: 20px;\n  border-top: 1px solid #313D4F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conversation-window/conversation-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__ = __webpack_require__("../../../../../src/app/shared/conversation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationWindowComponent = (function () {
    function ConversationWindowComponent() {
    }
    ConversationWindowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__["a" /* Conversation */])
    ], ConversationWindowComponent.prototype, "conversation", void 0);
    ConversationWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-conversation-window',
            template: __webpack_require__("../../../../../src/app/conversation-window/conversation-window.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conversation-window/conversation-window.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConversationWindowComponent);
    return ConversationWindowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/conversation-window/message-input/message-input.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" class=\"form-inline\">\n  <div class=\"input-group\">\n    <fieldset class=\"form-control-input-wrapper\">\n      <div class=\"fieldset-content\">\n        <input type=\"text\" name=\"new_message\" placeholder=\"Napisz wiadomość\" class=\"form-control\" [(ngModel)]=\"newMessage\" >\n      </div>\n    </fieldset>\n    <button type=\"button\" class=\"btn btn-blue btn-without-shadow\" (click)=\"onMessageSent()\">Wyślij</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/conversation-window/message-input/message-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conversation-window/message-input/message-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__ = __webpack_require__("../../../../../src/app/shared/conversation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_conversations_service__ = __webpack_require__("../../../../../src/app/shared/conversations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageInputComponent = (function () {
    function MessageInputComponent(conversationsService) {
        this.conversationsService = conversationsService;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
    };
    MessageInputComponent.prototype.onMessageSent = function () {
        for (var key in this.conversationsService.conversations) {
            if (this.conversationsService.conversations.hasOwnProperty(key)) {
                if (this.conversationsService.conversations[key]["id"] == this.activeConversation.id) {
                    console.log(this.conversationsService.conversations[key]);
                    this.conversationsService.conversations[key].messages.push({
                        id: 99,
                        author: 'User',
                        content: this.newMessage,
                        time: '13:33',
                        read: false
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_conversation_model__["a" /* Conversation */])
    ], MessageInputComponent.prototype, "activeConversation", void 0);
    MessageInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-message-input',
            template: __webpack_require__("../../../../../src/app/conversation-window/message-input/message-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conversation-window/message-input/message-input.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_conversations_service__["a" /* ConversationsService */]])
    ], MessageInputComponent);
    return MessageInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/conversation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversation; });
var Conversation = (function () {
    function Conversation(id, name, imagePath, usersCount, messagesCount, messages) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.usersCount = usersCount;
        this.messagesCount = messagesCount;
        this.messages = messages;
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.usersCount = usersCount;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    return Conversation;
}());



/***/ }),

/***/ "../../../../../src/app/shared/conversations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conversation_model__ = __webpack_require__("../../../../../src/app/shared/conversation.model.ts");


var ConversationsService = (function () {
    function ConversationsService() {
        this.selectedConversation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.conversations = [
            new __WEBPACK_IMPORTED_MODULE_1__conversation_model__["a" /* Conversation */](1, 'piekni koderzy i ikeowcy a także kodowcy', 'https://scontent-waw1-1.xx.fbcdn.net/v/t34.0-12/26794042_10213691360710090_1593931239_n.png?oh=485fa02289be0c7f40eeed610f1a8163&oe=5A6F0595', 1, 0, null),
            new __WEBPACK_IMPORTED_MODULE_1__conversation_model__["a" /* Conversation */](2, 'IT - Everyday normal crew', 'https://scontent-waw1-1.xx.fbcdn.net/v/t34.0-12/12286114_1140802275947762_1558203979_n.jpg?oh=d36d14904bdcf34fa8cccd9418a34e20&oe=5A6ED59F', 4, 2, [{ id: 1, author: 'Kaszel', content: 'Siema', time: '12:33', read: true }, { id: 1, author: 'Kosa w plecy?', content: 'No elo', time: '12:34', read: false }]),
            new __WEBPACK_IMPORTED_MODULE_1__conversation_model__["a" /* Conversation */](3, 'Natalka', 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p100x100/24131266_1444786205647732_8925233050924907354_n.jpg?oh=33d017c111576ba82a16db637ab9d44e&oe=5B1CB9E4', 1, 0, null),
            new __WEBPACK_IMPORTED_MODULE_1__conversation_model__["a" /* Conversation */](4, 'Piotr Uzarski', 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p100x100/20431711_1708899489138035_1761281252258133360_n.jpg?oh=d7d25ca500e0c4ce55d7afdd0b54197a&oe=5ADDDC72', 1, 0, null),
        ];
    }
    return ConversationsService;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/conversations-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conversations-list sm-12\">\n  <h3 class=\"sm-12 columns\">Users</h3>\n  <ul>\n    <li href=\"#\" *ngFor=\"let conversation of conversations\" class=\"sm-12 columns\">\n      <app-single-conversation [conversation]=\"conversation\"></app-single-conversation>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/conversations-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conversations-list h3 {\n  color: #5B6779;\n  font-size: 0.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 1.0625rem; }\n\n.conversations-list ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n  .conversations-list ul li {\n    cursor: pointer;\n    color: #999fa9;\n    padding-top: 0.625rem;\n    padding-bottom: 0.625rem; }\n    .conversations-list ul li:hover, .conversations-list ul li .active {\n      background-color: #313D4F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/conversations-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__ = __webpack_require__("../../../../../src/app/shared/conversations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationsListComponent = (function () {
    function ConversationsListComponent(conversationsService) {
        this.conversationsService = conversationsService;
        this.conversations = [];
    }
    ConversationsListComponent.prototype.ngOnInit = function () {
        this.conversations = this.conversationsService.conversations;
    };
    ConversationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-conversations-list',
            template: __webpack_require__("../../../../../src/app/sidebar/conversations-list/conversations-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/conversations-list/conversations-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__["a" /* ConversationsService */]])
    ], ConversationsListComponent);
    return ConversationsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#{{ conversation.id }}\" class=\"row single-conversation align-middle\" (click)=\"onSelectConversation()\">\n  <div class=\"sm-2\">\n    <div class=\"conversation-image\" [ngStyle]=\"{'background-image': 'url(' + conversation.imagePath + ')'}\"></div>\n  </div>\n  <div class=\"sm-8 columns conversation-data\">\n    <h3>{{ conversation.name }}</h3>\n    <p *ngIf=\"lastMessage !== null\">{{ lastMessage.author }}: {{ lastMessage.content }}</p>\n  </div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \" \";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.clear-list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.align-right {\n  text-align: right; }\n\n.hide,\n.hidden,\n.template,\n.invisible {\n  display: none !important; }\n\n.caret-up:before {\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1);\n  display: inline-block;\n  vertical-align: text-top; }\n\n.handle {\n  cursor: move; }\n\n.image-overflow-container {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.single-conversation {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .single-conversation .conversation-data h3, .single-conversation .conversation-data p {\n    white-space: nowrap;\n    font-weight: 600;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    font-size: 0.875rem; }\n  .single-conversation .conversation-data h3 {\n    color: #FFF; }\n  .single-conversation .conversation-data p {\n    color: #7F8FA4; }\n  .single-conversation .conversation-image {\n    height: 40px;\n    width: 40px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__ = __webpack_require__("../../../../../src/app/shared/conversations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_conversation_model__ = __webpack_require__("../../../../../src/app/shared/conversation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleConversationComponent = (function () {
    function SingleConversationComponent(conversationService) {
        this.conversationService = conversationService;
        this.lastMessage = null;
    }
    SingleConversationComponent.prototype.ngOnInit = function () {
        if (this.conversation.messages !== null) {
            this.lastMessage = this.conversation.messages[this.conversation.messages.length - 1];
        }
    };
    SingleConversationComponent.prototype.onSelectConversation = function () {
        console.log(this.conversation);
        this.conversationService.selectedConversation.emit(this.conversation);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_conversation_model__["a" /* Conversation */])
    ], SingleConversationComponent.prototype, "conversation", void 0);
    SingleConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-single-conversation',
            template: __webpack_require__("../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/conversations-list/single-conversation/single-conversation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_conversations_service__["a" /* ConversationsService */]])
    ], SingleConversationComponent);
    return SingleConversationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"sm-12 columns\">\n    <app-conversations-list></app-conversations-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map