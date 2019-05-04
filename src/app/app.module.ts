import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// servicios
import { NoticiasService } from './noticias.service';
// servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutIP500Component } from './about-ip500/about-ip500.component';
import { Ip500BoardComponent } from './ip500-board/ip500-board.component';
import { Ip500MembersComponent } from './ip500-members/ip500-members.component';
import { Ip500PartnersComponent } from './ip500-partners/ip500-partners.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ProductsComponent } from './products/products.component';
import { Gt150Component } from './gt150/gt150.component';
import { EthernetComponent } from './ethernet/ethernet.component';
import { Cnx100Component } from './cnx100/cnx100.component';
import { Cnx200Component } from './cnx200/cnx200.component';
import { DevelopmentComponent } from './development/development.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { Ip500SolutionsComponent } from './ip500-solutions/ip500-solutions.component';
import { ProjectComponent } from './project/project.component';
import { TechnologyComponent } from './technology/technology.component';
import { NewsNewsComponent } from './news-news/news-news.component';
import { EventsComponent } from './events/events.component';
import { PressComponent } from './press/press.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { BarraComponent } from './footer/barra/barra.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsTwoComponent } from './news-two/news-two.component';
import { LoginComponent } from './footer/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    AboutIP500Component,
    Ip500BoardComponent,
    Ip500MembersComponent,
    Ip500PartnersComponent,
    JoinUsComponent,
    ProductsComponent,
    Gt150Component,
    EthernetComponent,
    Cnx100Component,
    Cnx200Component,
    DevelopmentComponent,
    SolutionsComponent,
    Ip500SolutionsComponent,
    ProjectComponent,
    TechnologyComponent,
    NewsNewsComponent,
    EventsComponent,
    PressComponent,
    ContactComponent,
    NewsComponent,
    FooterComponent,
    BarraComponent,
    NewComponentComponent,
    NewsOneComponent,
    NewsTwoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AppBootstrapModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]


})
export class AppModule { }

