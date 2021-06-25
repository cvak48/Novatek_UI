"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdvanceFilterPipe = void 0;
var core_1 = require("@angular/core");
var AdvanceFilterPipe = /** @class */ (function () {
    function AdvanceFilterPipe() {
    }
    AdvanceFilterPipe.prototype.transform = function (value, input, searchableList) {
        if (input) {
            input = input.trim().toLowerCase();
            var suggestedList = value.filter(function (item) {
                var isTrue = false;
                for (var k in searchableList) {
                    if (item[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return item;
                    }
                }
            });
            return suggestedList;
        }
        return value;
    };
    AdvanceFilterPipe = __decorate([
        core_1.Pipe({
            name: 'advanceFilter'
        })
    ], AdvanceFilterPipe);
    return AdvanceFilterPipe;
}());
exports.AdvanceFilterPipe = AdvanceFilterPipe;
