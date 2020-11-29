import { RegisterForm } from './../../models/registerForm';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',   // nombre del componente.
    templateUrl: './register.component.html',   // fichero html del componente.
    styleUrls: ['./register.component.css']     // fichero css del componente.
})
export class RegisterComponent implements OnInit {
    // variable instancia de clase RegisterForm.
    public registerModel: RegisterForm;
    public ok: boolean;
    public errorMsg: string;

    constructor() { 
        this.registerModel = new RegisterForm();
        this.ok = true;
        this.errorMsg = '';
    }

    ngOnInit(): void { }

    onSubmit(f: NgForm): void {
        if(this.registerModel.passw.length < 6) {
            this.ok = false;
            this.errorMsg = 'La password debe contener almenos 6 caracteres';
        } else {
            this.ok = true;
        }

    }
}
