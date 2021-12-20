import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
  ],
  imports: [CommonModule, InboxRoutingModule, SharedModule],
})
export class InboxModule {}
