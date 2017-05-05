import { Component,ViewChild,AfterViewInit } from '@angular/core';

//Swipper js
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  moduleId:module.id + '',
  selector: 'videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.css']
  
  
})

export class VideosComponent {
 videos = [
{
"id": "1",
"url": "182987011",
"name": "Quickweb",
"title": "Quickweb",
"image": "http://www.quickapps.ie/make/images/video-poster.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickweb.mp4",

},


{
"id": "2",
"url": "https://player.vimeo.com/video/182987011",
"name": "QuickGraphics",
"title": "QuickGraphics",
"image": "http://www.quickapps.ie/make/images/video-poster-g.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickgraphics+final.mp4",

},



{
"id": "3",
"url": "https://player.vimeo.com/video/182987011",
"name": "Quickweb",
"title": "Quickweb",
"image": "http://www.quickapps.ie/make/images/video-poster.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickweb.mp4",
"poster": "https://img.omdbapi.com/?i=tt0098904&apikey=12d8f016"
},


{
"id": "4",
"url": "https://player.vimeo.com/video/182987011",
"name": "Quickweb",
"title": "Quickweb",
"image": "http://www.quickapps.ie/make/images/video-poster.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickweb.mp4",
"poster": "https://img.omdbapi.com/?i=tt0098904&apikey=12d8f016"
},


{
"id": "5",
"url": "https://player.vimeo.com/video/182987011",
"name": "Quickweb",
"title": "Quickweb",
"image": "http://www.quickapps.ie/make/images/video-poster.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickweb.mp4",
"poster": "https://img.omdbapi.com/?i=tt0098904&apikey=12d8f016"
},


{
"id": "6",
"url": "https://player.vimeo.com/video/182987011",
"name": "Quickweb",
"title": "Quickweb",
"image": "http://www.quickapps.ie/make/images/video-poster.jpg",
"myvideos": "https://s3-eu-west-1.amazonaws.com/quickapps/quickweb.mp4",
"poster": "https://img.omdbapi.com/?i=tt0098904&apikey=12d8f016"
},

];
@ViewChild(KSSwiperContainer) swiperContainer:KSSwiperContainer;
 videoSwipeOptions: any;




constructor(){
//array of videos
 





 this.videoSwipeOptions = {
       pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    };

}

ngAfterViewInit() {
    console.log(this.swiperContainer);
  }



}
  





