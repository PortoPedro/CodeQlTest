"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestControllerModule = void 0;
const common_1 = require("@nestjs/common");
const test_controller_controller_1 = require("./test-controller.controller");
const test_controller_service_1 = require("./test-controller.service");
let TestControllerModule = class TestControllerModule {
};
exports.TestControllerModule = TestControllerModule;
exports.TestControllerModule = TestControllerModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_controller_controller_1.TestControllerController],
        providers: [test_controller_service_1.TestControllerService]
    })
], TestControllerModule);
//# sourceMappingURL=test-controller.module.js.map