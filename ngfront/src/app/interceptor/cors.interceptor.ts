import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const corsReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            .set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        });
        return next.handle(corsReq);
    }
}