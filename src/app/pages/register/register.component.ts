import { RegisterForm } from './../../models/registerForm';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',   // nombre del componente.
    templateUrl: './register.component.html',   // fichero html del componente.
    styleUrls: ['./register.component.css']     // fichero css del componente.
})
export class RegisterComponent implements OnInit {
    public registerModel: RegisterForm;

    constructor() { 
        this.registerModel = new RegisterForm();
    }

    ngOnInit(): void { }
}
