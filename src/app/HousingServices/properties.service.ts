import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../propertycard/iproperty';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(private http: HttpClient) {}

  GetallProperties(): Observable<Iproperty[]> {
    return this.http.get('Data/properties.json').pipe(
      map((data) => {
        const propertiesarray:Iproperty[]=[];
        for (const ID in data) {
          if (data.hasOwnProperty(ID)) {
            propertiesarray.push(data[ID]);
          }
        }
        return propertiesarray;
      })
    );
  }
}
