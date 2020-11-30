import { RegisterForm } from './../../models/registerForm';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',   // nombre del componente.
    templateUrl: './register.component.html',   // fichero html del componente.
    styleUrls: ['./register.component.css'],     // fichero css del componente.
    providers: [RegisterService]    // en los providers indicamos los servicios que usamos en este componente.
})
export class RegisterComponent implements OnInit {
    // variable instancia de clase RegisterForm.
    registerModel = new RegisterForm();
    public ok: boolean;
    public minCharPassw: boolean;
    public booleanArr: Array<boolean> = [];
    public errorMsg: string;
    public isChecked: boolean;

    constructor(private registerService: RegisterService, private router: Router) {
        this.ok = true;
        this.minCharPassw = true;
        this.booleanArr = [true, true, true, true, true];
        this.errorMsg = '';
        // this.errorMsg = '';
    }

    ngOnInit(): void { }

    onSubmit(f: NgForm): void {
        if(this.registerModel.passw.length < 6) {
            this.minCharPassw = false;
            this.errorMsg = 'La password debe contener almenos 6 caracteres.';
        } else {
            this.minCharPassw = true;
        }

        if (this.registerModel.passw !== this.registerModel.validatePassw) {
            this.ok = false;
            this.errorMsg = 'La password debe coincidir.';
        } else {
            this.ok = true;
        }

        if (this.minCharPassw && this.ok) {
            // si los datos son válidos los envía al service.
            this.registerService.sendRegister(this.registerModel);
            // rediccionará a la pantalla de registerComplete.
            this.router.navigate(["registerComplete"]);
        }

        /*
        if(this.registerModel.passw.length < 6) {
            this.booleanArr[4] = false;
            this.errorMsg[4] = 'La password debe contener almenos 6 caracteres.';
        } else {
            this.booleanArr[4] = true;
        }
        */


    }

}
