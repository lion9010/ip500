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
import { SolutionsComponent } from './solutions/solutions.component';
import { LoginComponent } from './footer/login/login.component';
import { PerfilMiembrosComponent } from './perfil-miembros/perfil-miembros.component';
import { PerfilSociosComponent } from './perfil-socios/perfil-socios.component';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';


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
    SolutionsComponent,
    LoginComponent,
    PerfilMiembrosComponent,
    PerfilSociosComponent
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

export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((Event): Event is Scroll => Event instanceof Scroll)
    ).subscribe(Event => {
      if (Event.position) {
        // backward navigation
        viewportScroller.scrollToPosition(Event.position);
      } else if (Event.anchor) {
        // anchor navigation
        viewportScroller.scrollToAnchor(Event.anchor);
      } else {
        // forward navigation
        // con desplazamiento atenuado
        const scrollToTop = window.setInterval(() => {
          const pos = window.pageYOffset;
          if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 16);
        //  la siguiente línea es para que haya un desplazamiento instantaneo
        // viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}

