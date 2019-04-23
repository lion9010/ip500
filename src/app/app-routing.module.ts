import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutIP500Component } from './about-ip500/about-ip500.component';
import { Cnx100Component } from './cnx100/cnx100.component';
import { Cnx200Component } from './cnx200/cnx200.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentComponent } from './development/development.component';
import { EthernetComponent } from './ethernet/ethernet.component';
import { EventsComponent } from './events/events.component';
import { Gt150Component } from './gt150/gt150.component';
import { Ip500BoardComponent } from './ip500-board/ip500-board.component';
import { Ip500MembersComponent } from './ip500-members/ip500-members.component';
import { Ip500PartnersComponent } from './ip500-partners/ip500-partners.component';
import { Ip500SolutionsComponent } from './ip500-solutions/ip500-solutions.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NewsComponent } from './news/news.component';
import { NewsNewsComponent } from './news-news/news-news.component';
import { PressComponent } from './press/press.component';
import { ProductsComponent } from './products/products.component';
import { ProjectComponent } from './project/project.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologyComponent } from './technology/technology.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewsOneComponent} from './news-one/news-one.component';
import { NewsTwoComponent } from './news-two/news-two.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-two', component: NewsTwoComponent},
  { path: 'new-one', component: NewsOneComponent},
  {path: 'new-component', component: NewComponentComponent},
  { path: 'about', component: AboutComponent},
  { path: 'about-ip500', component: AboutIP500Component },
  { path: 'cnx100', component: Cnx100Component },
  { path: 'cnx200', component: Cnx200Component },
  { path: 'contact', component: ContactComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'ethernet', component: EthernetComponent },
  { path: 'events', component: EventsComponent },
  { path: 'gt150', component: Gt150Component },
  { path: 'ip500-board', component: Ip500BoardComponent },
  { path: 'ip500-members', component: Ip500MembersComponent },
  { path: 'ip500-partners', component: Ip500PartnersComponent },
  { path: 'ip500-solutions', component: Ip500SolutionsComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-news', component: NewsNewsComponent },
  { path: 'press', component: PressComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'solutions', component: SolutionsComponent },
  
  { path: 'technology', component: TechnologyComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
