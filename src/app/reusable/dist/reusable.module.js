"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReusableModule = void 0;
var filter_all_pipe_1 = require("./pipes/filters/filterAll/filter-all.pipe");
var advance_filter_pipe_1 = require("./pipes/filters/advance-filter/advance-filter.pipe");
var advance_search_component_1 = require("./advance-search/advance-search.component");
var nv_trim_pipe_1 = require("./pipes/nv-trim/nv-trim.pipe");
var ratting_component_1 = require("./ratting/ratting.component");
var nv_custom_component_component_1 = require("./nv-custom-component/nv-custom-component.component");
var upload_component_1 = require("./upload/upload.component");
var nv_file_upload_directive_1 = require("./directives/file-upload/nv-file-upload.directive");
var nv_dropdown_component_1 = require("./nv-dropdown/nv-dropdown.component");
var user_profile_menu_component_1 = require("./user-profile-menu/user-profile-menu.component");
var notification_component_1 = require("./notification/notification.component");
var nv_initials_pipe_1 = require("./pipes/nv-initials/nv-initials.pipe");
var avatar_component_1 = require("./avatar/avatar.component");
var search_component_1 = require("./search/search.component");
var material_module_1 = require("./../material.module");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var footer_component_1 = require("./footer/footer.component");
var side_nav_component_1 = require("./side-nav/side-nav.component");
var novatek_logo_component_1 = require("./novatek-logo/novatek-logo.component");
var panel_component_1 = require("./panel/panel.component");
var text_area_component_1 = require("./text-area/text-area.component");
var comment_box_component_1 = require("./comment-box/comment-box.component");
var tabs_component_1 = require("./tabs/tabs.component");
var tabs_wrapper_component_1 = require("./tabs/tabs-wrapper.component");
var inverted_tabs_component_1 = require("./inverted-tabs/inverted-tabs.component");
var left_tab_component_1 = require("./left-tab/left-tab.component");
var right_tab_component_1 = require("./right-tab/right-tab.component");
var feed_component_1 = require("./feed/feed.component");
var placeholder_card_component_1 = require("./placeholder/placeholder-card/placeholder-card.component");
var placeholder_list_component_1 = require("./placeholder/placeholder-list/placeholder-list.component");
var placeholder_banner_component_1 = require("./placeholder/placeholder-banner/placeholder-banner.component");
var placeholderBigCard_component_1 = require("./placeholder/placeholderBigCard/placeholderBigCard.component");
var table_1 = require("@angular/material/table");
var custom_datatable_component_1 = require("./custom-datatable/custom-datatable.component");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var data_property_getter_pipe_1 = require("./custom-datatable/data-property-getter-pipe/data-property-getter.pipe");
var test_component_1 = require("../main/test/test.component");
var progressive_bar_component_1 = require("./progressive-bar/progressive-bar.component");
var sharedComponents = [
    nv_initials_pipe_1.NvInitialsPipe,
    advance_filter_pipe_1.AdvanceFilterPipe,
    filter_all_pipe_1.FilterAllPipe,
    nv_trim_pipe_1.NvTrimPipe,
    nv_file_upload_directive_1.NvFileUploadDirective,
    footer_component_1.FooterComponent,
    side_nav_component_1.SideNavComponent,
    novatek_logo_component_1.NovatekLogoComponent,
    custom_datatable_component_1.CustomDatatableComponent,
    data_property_getter_pipe_1.DataPropertyGetterPipe,
    panel_component_1.PanelComponent,
    search_component_1.SearchComponent,
    text_area_component_1.TextAreaComponent,
    avatar_component_1.AvatarComponent,
    notification_component_1.NotificationComponent,
    user_profile_menu_component_1.UserProfileMenuComponent,
    panel_component_1.PanelComponent,
    search_component_1.SearchComponent,
    comment_box_component_1.CommentBoxComponent,
    text_area_component_1.TextAreaComponent,
    nv_dropdown_component_1.NvDropdownComponent,
    upload_component_1.UploadComponent,
    test_component_1.TestComponent,
    tabs_component_1.TabsComponent,
    tabs_wrapper_component_1.TabWrapper,
    inverted_tabs_component_1.InvertedTabsComponent,
    left_tab_component_1.LeftTabComponent,
    right_tab_component_1.RightTabComponent,
    feed_component_1.FeedComponent,
    placeholder_card_component_1.PlaceholderCardComponent,
    placeholder_list_component_1.PlaceholderListComponent,
    placeholder_banner_component_1.PlaceholderBannerComponent,
    placeholderBigCard_component_1.PlaceholderBigCardComponent,
    nv_custom_component_component_1.NvCustomComponentComponent,
    upload_component_1.UploadComponent,
    ratting_component_1.RattingComponent,
    advance_search_component_1.AdvanceSearchComponent,
    progressive_bar_component_1.ProgressiveBarComponent
];
var ReusableModule = /** @class */ (function () {
    function ReusableModule() {
    }
    ReusableModule = __decorate([
        core_1.NgModule({
            declarations: sharedComponents,
            imports: [
                common_1.CommonModule,
                table_1.MatTableModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_module_1.MaterialModule,
            ],
            exports: sharedComponents,
            providers: [filter_all_pipe_1.FilterAllPipe, advance_filter_pipe_1.AdvanceFilterPipe]
        })
    ], ReusableModule);
    return ReusableModule;
}());
exports.ReusableModule = ReusableModule;
