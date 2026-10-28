import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { InsertarDepartamento } from './components/insertar-departamento/insertar-departamento';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "InsertarDepartamento", component: InsertarDepartamento },
  { path: "Details/:id/:nombre/:localidad", component: DetailsComponent },
  { path: "Update/:id", component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
