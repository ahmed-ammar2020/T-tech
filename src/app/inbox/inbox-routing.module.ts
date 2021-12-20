import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { InboxGuard } from './inbox.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'a',
        component: Tab1Component,
        canActivate: [InboxGuard],
        data: {
          role: 'Admin',
        },
      },
      {
        path: 'b',
        component: Tab2Component,
        canActivate: [InboxGuard],
        data: {
          role: 'Editor',
        },
      },
      {
        path: 'c',
        component: Tab3Component,
        canActivate: [InboxGuard],
        data: {
          role: 'Guest',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
