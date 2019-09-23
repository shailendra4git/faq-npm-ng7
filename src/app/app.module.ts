import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { UserGuideComponent } from './user-guide/user-guide.component';

import { DemoMaterialModule } from './material-module';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    UserGuideComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule,
    DemoMaterialModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
