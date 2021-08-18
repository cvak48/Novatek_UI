import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NvPlaceholderBigCardComponent } from '../reusable/placeholder/nv-placeholderBigCard/nv-placeholderBigCard.component';
import { NvPlaceholderCardComponent } from '../reusable/placeholder/nv-placeholder-card/nv-placeholder-card.component';
import { NvPlaceholderBannerComponent } from '../reusable/placeholder/nv-placeholder-banner/nv-placeholder-banner.component';
import { NvPlaceholderListComponent } from '../reusable/placeholder/nv-placeholder-list/nv-placeholder-list.component';
import { UserListViewComponent } from './components/user-list-view/user-list-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-list', component: UserListViewComponent},
    { path: 'demo', component: DemoPageComponent },
    { path: 'PlaceholderBigCard', component: NvPlaceholderBigCardComponent },
    { path: 'placeholderCard', component: NvPlaceholderCardComponent },
    { path: 'placeholderBanner', component: NvPlaceholderBannerComponent },
    { path: 'placeholderList', component: NvPlaceholderListComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
