import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ServiceDepartamentos } from '../../services/Service.departamentos';

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

  constructor(private _cdr: ChangeDetectorRef, private _serviceDepartamentos: ServiceDepartamentos) {
    this.insertado = false;
  }

  insertarDepartamento() {
    let departamento = {
      numero: this.nombre.nativeElement.value,
      nombre: this.nombre.nativeElement.value,
      localidad: this.localidad.nativeElement.value
    }
    
    this._serviceDepartamentos.insertarDepartamento(departamento).subscribe((res: any) => {
      this.insertado = true;
      this._cdr.detectChanges();

    })
  }

}
