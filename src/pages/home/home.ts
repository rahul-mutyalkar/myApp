import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FirstpagePage} from '../firstpage/firstpage';

/*Plugins Section*/ 
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  watchedLocation:{latitude:number,longitude:number}={latitude:0,longitude:0};
currentLocation : {latitude:number,longitude:number}={latitude:0,longitude:0};
  constructor(public navCtrl: NavController,private geolocation: Geolocation) {
    this.watchLocation()
    // this.getCurrentLocation();
  }
  watchLocation()
  {
    let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
 this.watchedLocation={latitude:data.coords.latitude,longitude:data.coords.longitude};
 console.log('watchLocation : ',this.watchedLocation);
if(this.currentLocation.longitude==0 && this.currentLocation.latitude==0)
{
this.currentLocation={latitude:data.coords.latitude,longitude:data.coords.longitude};
}
});
  }

  getCurrentLocation()
  {
    console.log('getting current location : ')
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   this.currentLocation={latitude:resp.coords.latitude,longitude:resp.coords.latitude};
    //   console.log('resp.coords : ',resp.coords);
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
     
  }
  clickToNavigate()
  {
    this.navCtrl.push(FirstpagePage);
  }
  
}
