"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdvanceSearchComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AdvanceSearchComponent = /** @class */ (function () {
    function AdvanceSearchComponent() {
        this.isAdvance = false;
        this.list = mockAdvanceSearchInput().list;
        this.searchableRefList = mockAdvanceSearchInput().searchableRefList;
        this.queryFormControl = new forms_1.FormControl('');
        this.searchableList = [];
        this.inputKeywordLabel = 'All field';
    }
    AdvanceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAdvance) {
            this.searchableList = [];
            var isQueryKeyword_1 = false;
            this.queryFormControl.valueChanges.subscribe(function (selectedValue) {
                var trimmedInput = '  ';
                console.log('ngOnInit' + _this.list);
                if (_this.queryFormControl.value === '') {
                    isQueryKeyword_1 = false;
                }
                if (!isQueryKeyword_1) {
                    _this.searchableList = [];
                    _this.inputKeywordLabel = 'All field';
                }
                // modify searchableList; specific search item
                if (selectedValue.includes(':')) {
                    _this.searchableList = _this.modifySearchableList(selectedValue, _this.searchableRefList);
                    if (_this.searchableList && _this.searchableList.length > 0) {
                        isQueryKeyword_1 = true;
                    }
                }
                // make searchableList as default; search all area
                if (_this.searchableList.length === 0 || !_this.searchableList) {
                    _this.searchableList = _this.searchableRefList;
                    isQueryKeyword_1 = false;
                }
                // trim keyWord from input; specific area
                if (_this.searchableList && selectedValue.includes(':')) {
                    trimmedInput = _this.trimInputKeyWord(selectedValue, _this.searchableList);
                }
                if (trimmedInput === ' ') {
                    _this.queryFormControl.setValue(trimmedInput);
                }
            });
        }
    };
    AdvanceSearchComponent.prototype.onKeyUp = function (event) { };
    AdvanceSearchComponent.prototype.onKeyDown = function (event) { };
    AdvanceSearchComponent.prototype.onSearchBlur = function (event) { };
    AdvanceSearchComponent.prototype.onSearchFocus = function () { };
    AdvanceSearchComponent.prototype.onInput = function (event) { };
    AdvanceSearchComponent.prototype.trimInputKeyWord = function (input, list) {
        var newItem = '';
        var newInput = '';
        // add colon to itemList for comparing
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            newItem = item + ':';
            if (input === newItem) {
                newInput = ' ';
            }
            else {
                // not found
                newInput = input;
            }
        }
        return newInput;
    };
    AdvanceSearchComponent.prototype.modifySearchableList = function (query, list) {
        var keyWordQuery = '';
        if (list) {
            // find keyWords like subject
            // check query
            keyWordQuery = query.split(":")[0];
            if (keyWordQuery) {
                // modify searchableList
                for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                    var item = list_2[_i];
                    if (keyWordQuery === item) {
                        list = [];
                        list.push(keyWordQuery);
                        this.inputKeywordLabel = query.split(':')[0] + ':';
                    }
                    else {
                        // not known keyWordQuery
                    }
                }
            }
            else {
                // no keywordQuery
            }
            return list;
        }
        else {
            return [];
        }
    };
    __decorate([
        core_1.Input()
    ], AdvanceSearchComponent.prototype, "isAdvance");
    __decorate([
        core_1.Input()
    ], AdvanceSearchComponent.prototype, "list");
    __decorate([
        core_1.Input()
    ], AdvanceSearchComponent.prototype, "searchableRefList");
    AdvanceSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-advance-search',
            templateUrl: './advance-search.component.html',
            styleUrls: ['./advance-search.component.scss']
        })
    ], AdvanceSearchComponent);
    return AdvanceSearchComponent;
}());
exports.AdvanceSearchComponent = AdvanceSearchComponent;
function mockAdvanceSearchInput() {
    var searchInput = {
        list: [
            { id: 1, name: 'prashobh', age: '25', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'john@yahoo.com' },
            { id: 2, name: 'Abraham', age: '35', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'aohn@yahoo.com' },
            { id: 3, name: 'Sam', age: '45', date: 'Mon Dec 20005 1995 00:00:00 GMT-0500', email: 'bohn@yahoo.com' },
            { id: 4, name: 'Anil', age: '15', date: 'Mon Dec 200005 1995 00:00:00 GMT-0500', email: 'cohn@yahoo.com' },
            { id: 5, name: 'Mariya', age: '24', date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500', email: 'dohn@yahoo.com' },
            { id: 6, name: 'Crock', age: '28', date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500', email: 'eohn@yahoo.com' },
            { id: 7, name: 'Ram', age: '21', date: 'Mon Dec 29995 1995 00:00:00 GMT-0500', email: 'fohn@yahoo.com' },
        ],
        searchableRefList: ['name', 'age', 'date', 'email']
    };
    return searchInput;
}
