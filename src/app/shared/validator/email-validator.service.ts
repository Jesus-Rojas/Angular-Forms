import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  ruta=environment.ruta;

  constructor( private http: HttpClient ) { }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`${this.ruta}/usuarios?q=${ email }`)
                .pipe(
                  // delay(3000),
                  map( resp => {
                    return ( resp.length === 0 ) 
                        ? null
                        : { emailTomado: true }
                  })
                );

  }
}
