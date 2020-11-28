import { RegisterModule } from './register/register.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [ RegisterModule ],
    exports: [ RegisterModule ],
    providers: [],
})
export class PagesModule {}