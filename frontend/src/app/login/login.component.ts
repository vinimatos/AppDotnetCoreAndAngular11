import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private readonly formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    console.log(this.form.value);

    this.loginService.login(this.form.value).subscribe(
      (result: any) => {
        console.log(typeof (result.success));
        if (result.success === true) {
          this.router.navigate(['/home']);
        } else {
          alert('Login/Password inválido!')
        }
      }
    );
  }
}
