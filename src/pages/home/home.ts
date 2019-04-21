import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  encodText:string="";
  encodData:any={};
  scannedData:any={};

  constructor(public navCtrl: NavController,public scanner:BarcodeScanner) {

  }
  scan(){
    this.options={
      prompt:'Scan your barcode'
    };
    this.scanner.scan(this.options).then((data)=>{
      this.scannedData = data;
    },(err) => {
      console.log('error :',err);
    })
  }
  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodText).then((data) => {
      this.encodData = data ;
    }, (err) => {
      console.log('error :',err);
    })
  }
}
