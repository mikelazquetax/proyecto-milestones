
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { CommonModule } from '@angular/common'; */

import { PopupComponent } from './popup/popup.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'popup', component: PopupComponent },
  { path: 'timeline', component: TimelineComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
