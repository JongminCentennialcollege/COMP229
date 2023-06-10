import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//컨텍트 추가



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';

import { MatMenuModule } from '@angular/material/menu'; // 메뉴용

// 컨텍트
// 프로젝트용

//...




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ServiceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule, // 메뉴추가용
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 301238132 JongMin Lee