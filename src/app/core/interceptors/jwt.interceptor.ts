import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServiceService } from '../../login/service/login-service.service';

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginServiceService); 
  const token = loginService.getToken();

  if(!req.url.toString().includes("auth/signin")){
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
 

  return next(req); 
};
