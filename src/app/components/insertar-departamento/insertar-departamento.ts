import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ServiceDepartamentos } from '../../services/Service.departamentos';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-departamento',
  standalone: false,
  styleUrl: './insertar-departamento.css',
  templateUrl: './insertar-departamento.html',
})
export class InsertarDepartamento {

  @ViewChild("numero") numero!: ElementRef;
  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild("localidad") localidad!: ElementRef;
  public insertado: boolean;

  constructor(private _cdr: ChangeDetectorRef, private _serviceDepartamentos: ServiceDepartamentos, private _router: Router) {
    this.insertado = false;
  }

  insertarDepartamento() {
    let num = parseInt(this.numero.nativeElement.value);
    let nom = this.nombre.nativeElement.value;
    let loc = this.localidad.nativeElement.value;

    let dept = new Departamento(num, nom, loc);

    let departamento = {
      numero: num,
      nombre: nom,
      localidad: loc
    }
    
    this._serviceDepartamentos.insertarDepartamento(dept).subscribe((res: any) => {
      //this.insertado = true;
      //this._cdr.detectChanges();
      this._router.navigate(['/']);
    })
  }

}
