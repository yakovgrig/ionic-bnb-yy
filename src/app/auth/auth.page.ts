import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
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
    private navController: NavController, 
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

    // this.authService.login();
    // this.navController.navigateForward('/places/tabs/discover');
    // return;

    this.loadingController.create({ keyboardClose: true, message: "Logging in..." }).then(loadingEl => {
      loadingEl.present();

      setTimeout(() => {
        //this.isLoading = true;
        loadingEl.dismiss();  
        
        //this.router.navigateByUrl('/places/tabs/discover');
        this.authService.login();

        this.navController.navigateForward('/places/tabs/discover');
      }, 1500);
    });
  }

  private signUp(){

  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin; 

  }
}
