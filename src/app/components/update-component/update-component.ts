import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/Departamento';
import { ElementRef } from '@angular/core';
import { ServiceDepartamentos } from '../../services/Service.departamentos';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit {

  public id!: number;
  public dep!: Departamento;
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('localidad') localidad!: ElementRef;

  constructor(private _activeRoute: ActivatedRoute, private _service: ServiceDepartamentos, private _route: Router, private _cdr: ChangeDetectorRef) {}

  actualizarDepartamento() {
    let nombre = this.nombre.nativeElement.value;
    let localidad = this.localidad.nativeElement.value;

    this.dep = new Departamento(this.id, nombre, localidad);

    this._service.actualizarDepartamento(this.dep).subscribe((data: any) => {
      this._route.navigate(['/']);
    })
  }

  ngOnInit(): void{
    this._activeRoute.params.subscribe((params: Params) => {
      this.id = parseInt(params['id']);
      
      this._service.findDepartamento(this.id).subscribe((data: any) => {
        this.dep = data;
      })

      console.log(this.dep);
      this._cdr.detectChanges();
    })
  }
}
