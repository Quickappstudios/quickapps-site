import { Component } from '@angular/core';

//get our firebaselistobservable
import{AngularFire,FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId:module.id + '',
  selector: 'about',
  templateUrl: 'about.component.html',
 styleUrls: ['about.component.css']  
  
})
export class AboutComponent {

items:FirebaseListObservable<any[]>;



constructor(public af:AngularFire){

 

//get the object
 this.items = af.database.list('items/items');

 //add data to firebase manually
 


this.items.subscribe(items => {
    // items is an array
    items.forEach(item => {
      
        console.log('Items:', items);
        
    });
})




}

}


// //array of data json//
// [
// {
// "id": "nlh2UmqB",
// "title": "PEOPLE ARE SEARCHING ON THEIR SMARTPHONE FOR A BUSINESS LIKE YOURS",
// "subheading": "TELL YOUR STORY",
// "content": "Seinfeld",
// "image": "https://s3.amazonaws.com/djquipvid/nlh2UmqB_1.jpg",
// "video": "https://s3.amazonaws.com/djquipvid/nlh2UmqB.mp4",
// "user": "mykebates",
// "views": "24",
// "poster": "http://www.quickapps.ie/make/images/video-poster.jpg"
// },
// ]


