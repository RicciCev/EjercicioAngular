import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/registerForm';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor() {}

    public sendRegister(data: RegisterForm): void {
        console.log('RegisterService');
        console.log(JSON.stringify(data));
    }
}