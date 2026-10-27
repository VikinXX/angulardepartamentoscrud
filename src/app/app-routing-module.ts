import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { InsertarDepartamento } from './components/insertar-departamento/insertar-departamento';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "InsertarDepartamento", component: InsertarDepartamento }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
