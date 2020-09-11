import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";


const routesConFig: Routes = [
  { path: 'contacts/:id', component: ContactsComponent },
  { path: '', component: ContactsComponent },
  { path: 'category', component: CategoryComponent },
  { path: '**', component: NotpageComponent }
];

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
import { ContactsComponent } from './contacts/contacts.component';
import { CategoryComponent } from './category/category.component';
import { NotpageComponent } from './notpage/notpage.component';
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";
import { TH1Component } from './th1/th1.component';
import { Th2B1Component } from './th2-b1/th2-b1.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { ThSibarComponent } from './share/th-sibar/th-sibar.component';
import { Th2B2Component } from './th2-b2/th2-b2.component';
import { HeaderBt2Component } from './share/header-bt2/header-bt2.component';
import { FooterBt2Component } from './share/footer-bt2/footer-bt2.component';

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
    ContactsComponent,
    CategoryComponent,
    NotpageComponent,
    TH1Component,
    Th2B1Component,
    HeaderComponent,
    FooterComponent,
    ThSibarComponent,
    Th2B2Component,
    HeaderBt2Component,
    FooterBt2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConFig),
    UserModule,
    AdminModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
