import { Component,OnInit } from '@angular/core';


//Firebase Service//
import {FirebaseService} from '../../../services/firebase.service';
import {Business} from '../../../services/Business';
import {Contacts} from '../../../services/Contacts';



@Component({
 moduleId:module.id + '',
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  providers: [FirebaseService]
  
})



export class ContactComponent implements OnInit{
  businesses:Business[];
  contacts: Contacts[];
  
constructor(private _firebaseService:FirebaseService) {



}

//On Lifecycle//
ngOnInit(){

/********************************************************************
* GET FIREBASE METHOD
********************************************************************/
//WE GET OUR OBJECT FROM OUR OUR FIREBASE SERVICE USING GET
this._firebaseService.getBusinesses().subscribe(businesses => {

this.businesses = businesses;
//console.log(businesses);
});


//WE GET OUR OBJECT FROM OUR OUR FIREBASE SERVICE USING GET to our contatcs node
this._firebaseService.getContacts().subscribe(contacts => {

this.contacts = contacts;
//console.log(contacts);
});

}






/********************************************************************
*  ADD FIREBASE METHOD
********************************************************************/
 addBusiness(
   name:string,
  description:string,
  email:string
    ){
    // //convertingfrom a number to a string
    //   var created_at = new Date().toString();
      
      
      
      //create new object//
      var newBusiness = {
        
        description:description,
        name:name,
        email:email
       
        
      }

      //Firebase adds the new business object
      this._firebaseService.addBusiness(newBusiness);
       console.log(newBusiness);
    }

}








