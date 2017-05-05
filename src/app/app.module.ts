import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//Swiper

import {KSSwiperModule} from 'angular2-swiper';

//Components//
import {NavbarComponent} from './components/navbar/navbar.component';
import {SliderComponent} from './components/slider/slider.component';
import {FooterComponent} from './components/footer/footer.component';

//Pages//
import {HomeComponent } from './components/pages/home/home.component';
import {AboutComponent } from './components/pages/about/about.component';
import {TipsComponent } from './components/pages/tips/tips.component';
import {BusinessComponent } from './components/pages/business-opportunitys/business.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import {QuickwebComponent } from './components/pages/quickweb/quickweb.component';
import {QuickgraphicsComponent } from './components/pages/quickgraphics/quickgraphics.component';
import {QuickshopComponent } from './components/pages/quickshop/quickshop.component';
import {CmsComponent } from './components/pages/cms/cms.component';
import {ContactComponent } from './components/pages/contact/contact.component';



//Firebase Database
import{AngularFireModule} from 'angularfire2';


//Routes
import {routing} from './app.routing';



 

//firebase cred
export 
const firebaseConfig = 
{

 apiKey: "AIzaSyBK_Miv6vU314VQz0qmL3ODpM06RA-1O4w",
    authDomain: "quickappswebsite.firebaseapp.com",
    databaseURL: "https://quickappswebsite.firebaseio.com",
    storageBucket: "quickappswebsite.appspot.com",
    messagingSenderId: "913207912032"
  
 

 }


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent ,
    SliderComponent,
    AboutComponent,
    TipsComponent,
    BusinessComponent,
    QuickwebComponent,
    QuickgraphicsComponent,
    QuickshopComponent,
    CmsComponent,
    ContactComponent,
    FooterComponent,
    VideosComponent,
   
    
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    KSSwiperModule,
    AngularFireModule.initializeApp(firebaseConfig)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 




}
