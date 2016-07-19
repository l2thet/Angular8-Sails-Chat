System.register(['@angular/core', './services/io.service'], function(exports_1, context_1) {
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
    var core_1, io_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (io_service_1_1) {
                io_service_1 = io_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_ioService, _changeDetector) {
                    this._ioService = _ioService;
                    this._changeDetector = _changeDetector;
                    this._ioServiceMessages = new Array();
                    this.messageToSend = "";
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //register to the observable
                    this._ioService.ioMessage$
                        .subscribe(function (message) {
                        var messageContent = "";
                        messageContent = message["message"];
                        _this._ioServiceMessages.push({
                            message: messageContent
                        });
                        _this._changeDetector.detectChanges();
                    });
                };
                AppComponent.prototype.sendMessage = function () {
                    if (this.messageToSend) {
                        var messageObject = {
                            message: this.messageToSend
                        };
                        this.messageToSend = "";
                        this._ioService.sendMessage(messageObject);
                    }
                };
                AppComponent.prototype.subscribeClick = function () {
                    //submit a change to the observable through the service
                    this._ioService.subscribeToSails();
                };
                AppComponent.prototype.unsubClick = function () {
                    this._ioService.unsubscribeToSails();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hw-app',
                        templateUrl: "./app/app.component.html",
                        providers: [io_service_1.ioService],
                        changeDetection: core_1.ChangeDetectionStrategy.Default
                    }), 
                    __metadata('design:paramtypes', [io_service_1.ioService, core_1.ChangeDetectorRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map