import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from './services/Service.departamentos';
import { InsertarDepartamento } from './components/insertar-departamento/insertar-departamento';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, InsertarDepartamento],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
