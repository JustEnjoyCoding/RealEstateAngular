import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(private http: HttpClient) {}


  GetallProperties() {
    return this.http.get('Data/properties.json')
    // .pipe(
    //   map((data) => {
    //     const propertiesarray: Iproperty[] = [{ID: 0,
    //       Name: '',
    //       Type: '',
    //       Price: 0,
    //       ImgName: '',
    //     }];
    //     for (ID in data) {
    //       if (data.hasOwnProperty(ID)) {
    //         propertiesarray.push(data[ID]);
    //       }
    //     }
    //     return propertiesarray;
    //   })
    // );
  }
}
