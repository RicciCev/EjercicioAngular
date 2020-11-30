import { RegisterCompleteComponent } from './pages/registerComplete/registerComplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register', // ruta que cargara como pagina por defecto.
    pathMatch: 'full'
  },
  {
    // ruta predefinida que mostrara el contenido del componente register.
    path: 'register',
    component: RegisterComponent
  },
  {
    // ruta para la página que nos llevará si el registro se ha completado de manera correcta.
    path: 'registerComplete',
    component: RegisterCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
