import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLogin = true;

  //isLoading = false;
  constructor(private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if (!form.valid)
      return;
      
    //console.log(form);
    if(this.isLogin)
      this.login();
    else
    this.signUp();


  }

  private login() {

    //this.isLoading = true;

    this.loadingController.create({ keyboardClose: true, message: "Logging in..." }).then(loadingEl => {
      loadingEl.present();

      this.authService.login();
      setTimeout(() => {
        //this.isLoading = true;
        loadingEl.dismiss();  
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
  }

  private signUp(){

  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin; 

  }
}
