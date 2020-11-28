import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',   // nombre del componente.
    templateUrl: './register.component.html',   // fichero html del componente.
    styleUrls: ['./register.component.css']     // fichero css del componente.
})
export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
