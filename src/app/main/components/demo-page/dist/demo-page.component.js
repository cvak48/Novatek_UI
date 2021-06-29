"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemoPageComponent = exports.NvComponent = void 0;
var nv_custom_component_component_1 = require("./../../../reusable/nv-custom-component/nv-custom-component.component");
var core_1 = require("@angular/core");
var NvComponent;
(function (NvComponent) {
    // First: Add the name of your reusable component to this enum
    NvComponent[NvComponent["Search"] = 0] = "Search";
    NvComponent[NvComponent["AdvancedSearch"] = 1] = "AdvancedSearch";
    NvComponent[NvComponent["NovaLogo"] = 2] = "NovaLogo";
    NvComponent[NvComponent["Notification"] = 3] = "Notification";
    NvComponent[NvComponent["Avatar"] = 4] = "Avatar";
    NvComponent[NvComponent["ProfileMenu"] = 5] = "ProfileMenu";
    NvComponent[NvComponent["Header"] = 6] = "Header";
    NvComponent[NvComponent["Dropdown"] = 7] = "Dropdown";
    NvComponent[NvComponent["DropToUpload"] = 8] = "DropToUpload";
    NvComponent[NvComponent["NvCheckBox"] = 9] = "NvCheckBox";
    NvComponent[NvComponent["NvSliderBar"] = 10] = "NvSliderBar";
    NvComponent[NvComponent["NvSliderToggle"] = 11] = "NvSliderToggle";
    NvComponent[NvComponent["NvRadioBut"] = 12] = "NvRadioBut";
})(NvComponent = exports.NvComponent || (exports.NvComponent = {}));
var DemoPageComponent = /** @class */ (function () {
    // search
    function DemoPageComponent() {
        this.selectedItem = NvComponent.Search;
        this.nvComponentType = NvComponent;
        // Second: Provide input data for your reusable component here if needed
        // Search
        this.items = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
        // footer
        // Avatar
        this.person = mockProfileMenu();
        //CustomComponent
        this.nvCheckBox = nv_custom_component_component_1.NvCustomComponent.CheckBox;
        this.nvSliderBar = nv_custom_component_component_1.NvCustomComponent.SliderBar;
        this.nvSliderToggle = nv_custom_component_component_1.NvCustomComponent.SlidToggle;
        this.nvRadioBut = nv_custom_component_component_1.NvCustomComponent.RadioButton;
    }
    DemoPageComponent.prototype.ngOnInit = function () {
    };
    DemoPageComponent.prototype.onItemClick = function (selectedItem) {
        this.selectedItem = selectedItem;
    };
    DemoPageComponent = __decorate([
        core_1.Component({
            selector: 'app-demo-page',
            templateUrl: './demo-page.component.html',
            styleUrls: ['./demo-page.component.scss']
        })
    ], DemoPageComponent);
    return DemoPageComponent;
}());
exports.DemoPageComponent = DemoPageComponent;
function mockProfileMenu() {
    var avatarProps = {
        id: 1,
        name: 'Alex Green',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
        notification: {
            number: 20,
            content: '',
            hasAttachment: false
        }
    };
    return avatarProps;
}
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
