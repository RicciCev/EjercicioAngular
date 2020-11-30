import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [ RegisterComponent ],
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [RegisterComponent],   // exportamos el componente registro para acceder desde el resto de ficheros.
    providers: [],
})
export class RegisterModule {}