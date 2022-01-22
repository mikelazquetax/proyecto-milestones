import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AddMonthComponent } from './add-month/add-month.component';
import { AppRoutingModule } from './app-routing.module';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    AddMonthComponent,
    PopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'popup', component: PopupComponent},
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
