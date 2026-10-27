import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ServiceDepartamentos } from '../../services/Service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{

  public departamentos: any[];

  constructor(private _cdr: ChangeDetectorRef, private _serviceDepartamentos: ServiceDepartamentos) {
    this.departamentos = [];
  }

  getDepartamentos() {
    this._serviceDepartamentos.getDepartamentos().subscribe((res: any) => {
      this.departamentos = res;
      this._cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getDepartamentos();
  }

}
