import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaceholderBigCardComponent } from '../reusable/placeholder/placeholderBigCard/placeholderBigCard.component';
import { PlaceholderCardComponent } from '../reusable/placeholder/placeholder-card/placeholder-card.component';
import { PlaceholderBannerComponent } from '../reusable/placeholder/placeholder-banner/placeholder-banner.component';
import { PlaceholderListComponent } from '../reusable/placeholder/placeholder-list/placeholder-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'demo', component: DemoPageComponent },
    { path: 'PlaceholderBigCard', component: PlaceholderBigCardComponent },
    { path: 'placeholderCard', component: PlaceholderCardComponent },
    { path: 'placeholderBanner', component: PlaceholderBannerComponent },
    { path: 'placeholderList', component: PlaceholderListComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
