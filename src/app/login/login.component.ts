import { Component } from '@angular/core';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-login',
  imports: [MaterialDesignModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;
  credential: Credentials;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginServiceService
  ) {

    this.credential = { email: '', password: '' };

    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onLogin() {
    this.credential.email = this.form.value.email || '';
    this.credential.password = this.form.value.password || '';
    console.log(this.credential)

    this.loginService.login(this.credential).subscribe({
      next: (response) => {
        console.log('Login realizado com sucesso:', response);
        this.router.navigate(['/home']); // Redireciona após o login
      },
      error: (err) => {
        console.error('Erro ao realizar login:', err);
      },
    });
  }
}
