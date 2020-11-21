import { Component, Input, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'
import { PinpadPage } from '../pinpad/pinpad.page';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;

  constructor(
    private faio: FingerprintAIO, 
    private router: Router, 
    private modalCtrl: ModalController, 
    private pinDialog: PinDialog ) { }

  ngOnInit() {
    console.log('I am modal: ', this.isModal);
  }

  set_fingerprint() {
    // ask pin and remember it 
    this.pinDialog.prompt('Enter your PIN', 'Setup fingerprint', ['OK', 'Cancel'])
      .then(
        (result: any) => {
          if (result.buttonIndex == 1) {
            console.log('User clicked OK, value is: ', result.input1);

            // register this pin for fingerprint
            this.faio.registerBiometricSecret({
              title: 'Enable Biometric Authentication',
              secret: result.input1,
              invalidateOnEnrollment: true,
              disableBackup: true,
            }).then( () => {
              alert("Authentication successful");
            }).catch( (error: any) => {
              console.log('Error: ', error);
            });
          } 
          else if(result.buttonIndex == 2) console.log('User cancelled');
        }
      );
  }

  login() {

    this.faio.loadBiometricSecret({
      title: 'Biometric Authentication', 
      subtitle: 'Coolest Plugin ever', 
      description: 'Please authenticate', 
      disableBackup:false, 
    }).then( (secret) => {
      //alert("Your PIN is: " + secret);
      console.log("Your PIN is:", secret);

      if ( this.isModal ) {
        this.modalCtrl.dismiss();
      } else {
        this.router.navigateByUrl('/home');
      }   

    }).catch( (error: any) => {
      console.log('Error: ', error);
    });

   
  }

}
