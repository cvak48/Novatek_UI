"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SearchComponent = /** @class */ (function () {
    // TODO: Need to bring click event from parents to make isFocus false and delete blur event
    function SearchComponent() {
        this.isAdvance = true;
        this.list = mockAdvanceSearchInput().list;
        this.searchableRefList = mockAdvanceSearchInput().searchableRefList;
        this.queryFormControl = new forms_1.FormControl('');
        this.searchableList = [];
        this.inputKeywordLabel = '';
        this.arrowUpEventCounter = 0;
        this.searchIcon = true;
        this.showMenu = false;
        this.isFocus = false;
        console.log('constructor');
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log('ngAfterViewInit');
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAdvance) {
            this.searchableList = [];
            var isQueryKeyword_1 = false;
            this.queryFormControl.valueChanges.subscribe(function (selectedValue) {
                console.log('ngOnInit' + _this.list);
                var trimmedInput = '  ';
                if (_this.queryFormControl.value === '') {
                    isQueryKeyword_1 = false;
                }
                if (!isQueryKeyword_1) {
                    _this.searchableList = [];
                    _this.inputKeywordLabel = '';
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
    SearchComponent.prototype.onSearchFocus = function () {
        this.isFocus = true;
    };
    SearchComponent.prototype.onSearchBlur = function (event) {
        this.isFocus = false;
        event.preventDefault();
        event.stopPropagation();
    };
    SearchComponent.prototype.onItemSelect = function (index) {
        this.selectedIndex = index;
        this.selectedItem = this.list[this.selectedIndex];
        this.queryFormControl.setValue(this.selectedItem.name);
        this.searchIcon = false;
        this.isFocus = true;
    };
    SearchComponent.prototype.onInput = function (event) {
        var _a, _b;
        console.log('onInput');
        var search = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        // this.filteredItems = this.filterList(mockItems(), search);
        // TODO:We need change detector tu update html as fast as the variable changes
        this.showMenu = ((_b = this.list) === null || _b === void 0 ? void 0 : _b.length) ? true : false;
        // TODO: hide cross-icon by pressing BackSpace.
        this.searchIcon = !search ? true : false;
    };
    SearchComponent.prototype.onCancelClick = function (event) {
        this.queryFormControl.setValue('');
        this.list.length = 0;
        this.showMenu = false;
        this.searchIcon = true;
        event.preventDefault();
    };
    SearchComponent.prototype.onKeyDown = function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    SearchComponent.prototype.onKeyUp = function (event) {
        this.searchIcon = false;
        if (event.key === 'Backspace') {
            if (this.queryFormControl.value === '') {
                this.searchIcon = true;
            }
        }
        else if (event.key === 'Escape') {
            this.queryFormControl.setValue('');
            this.searchIcon = true;
        }
        else if (event.key === 'Enter') {
            this.onItemSelect(this.selectedIndex);
        }
        else if (event.key === 'Tab') {
            this.onItemSelect(0);
        }
        else if (event.key === 'ArrowDown') {
            this.arrowUpEventCounter++;
            if (this.arrowUpEventCounter === 1) {
                this.selectedIndex = 0;
            }
            else {
                this.selectedIndex =
                    (this.selectedIndex + 1) % this.list.length;
            }
        }
        else if (event.key === 'ArrowUp') {
            if (this.selectedIndex <= 0) {
                this.selectedIndex = this.list.length;
            }
            this.selectedIndex = (this.selectedIndex - 1) % this.list.length;
        }
    };
    SearchComponent.prototype.trimInputKeyWord = function (input, list) {
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
    SearchComponent.prototype.modifySearchableList = function (query, list) {
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
    ], SearchComponent.prototype, "isAdvance");
    __decorate([
        core_1.Input()
    ], SearchComponent.prototype, "list");
    __decorate([
        core_1.Input()
    ], SearchComponent.prototype, "searchableRefList");
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss']
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
// function mockItems(): string[] {
//   const items = ['Tablet', 'Desktop', 'Mouse', 'Alex', 'Sarah', 'Slack'];
//   return items;
// }
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
