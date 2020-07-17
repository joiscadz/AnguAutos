import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autos } from '../Modelo/Autos';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/autos/agregar';

  
  createAutos(autos:Autos){
    return this.http.post<Autos>(this.Url,autos);
  }
  
}
