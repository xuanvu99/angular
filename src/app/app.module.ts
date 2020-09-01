import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SibarComponent } from './sibar/sibar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { TestNgComponent } from './test-ng/test-ng.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgInputComponent } from './ng-input/ng-input.component';
import { NgOutputComponent } from './ng-output/ng-output.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgPipesComponent } from './ng-pipes/ng-pipes.component';
import { NgServiceComponent } from './ng-service/ng-service.component';
import { Buoi5Component } from './buoi5/buoi5.component';
import { NgFormComponent } from "./ng-form/ng-form.component";

@NgModule({
  declarations: [
    AppComponent,
    SibarComponent,
    NavbarComponent,
    TestComponent,
    TestNgComponent,
    NgIfComponent,
    NgForComponent,
    NgInputComponent,
    NgOutputComponent,
    ChildComponent,
    ParentComponent,
    NgContentComponent,
    NgPipesComponent,
    NgServiceComponent,
    Buoi5Component,
    NgFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
