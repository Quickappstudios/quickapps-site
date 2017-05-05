import {Injectable} from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

//Business Class Model Object
import {Business} from '../services/Business';
import {Contacts} from '../services/Contacts';

@Injectable()
export class FirebaseService{

    //array of firebase collections
businesses:FirebaseListObservable<Business[]>;
contacts:FirebaseListObservable<Contacts[]>;



constructor(public af:AngularFire){

}


//get the Business Collection in Firebase from database//
getBusinesses() {
this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<[Business]>
return this.businesses;
}

//get the contact Collection in Firebase from database

getContacts() {
this.contacts = this.af.database.list('/contacts') as FirebaseListObservable<[Contacts]>
return this.contacts;
}

//ADD FUNCTIONALITY TO INSERT RECORDS to firebase//

addBusiness(newBusiness){
return this.contacts.push(newBusiness);


}

}


