import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from'@angular/router';

//Set up Routers
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component'; 
import {TipsComponent} from './components/pages/tips/tips.component';
import {BusinessComponent} from './components/pages/business-opportunitys/business.component';
import {VideosComponent} from './components/pages/videos/videos.component';
import {QuickwebComponent} from './components/pages/quickweb/quickweb.component';
import {QuickgraphicsComponent} from './components/pages/quickgraphics/quickgraphics.component';
import {QuickshopComponent} from './components/pages/quickshop/quickshop.component';
import {CmsComponent} from './components/pages/cms/cms.component';
import {ContactComponent} from './components/pages/contact/contact.component';

const appRoutes: Routes = [
    
   //export our array of pages 
    
    {
path:'',component:HomeComponent

    },
{
path:'about',component:AboutComponent


},

{
path:'tips',component:TipsComponent


},

{
path:'business',component:BusinessComponent


},

{
path:'videos',component:VideosComponent


},

{
path:'quickweb',component:QuickwebComponent


},
{
path:'quickgraphics',component:QuickgraphicsComponent


},

{
path:'quickshop',component:QuickshopComponent


},

{
path:'cms',component:CmsComponent


},

{
path:'contact',component:ContactComponent


}





];


//export Router
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);