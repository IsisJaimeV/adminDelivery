import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  iconPassword: string = 'fa fa-eye-slash password-icon';
  constructor() { }

  ngOnInit(): void {
    this.mostrarContrasenia();
  }

  mostrarContrasenia() {
    let password = document.getElementById('typepass') as HTMLInputElement;
    let viewPassword = document.getElementById('viewPassword') as HTMLInputElement;
    let click = false;

    viewPassword.addEventListener('click', (e)=>{
      if(!click){
        password.type = 'text';
        click = true;
        this.iconPassword = 'fa fa-eye password-icon';
      }else if(click){
        password.type = 'password';
        click = false;
        this.iconPassword = 'fa fa-eye-slash password-icon';
      }
    })
  }

}
