import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
