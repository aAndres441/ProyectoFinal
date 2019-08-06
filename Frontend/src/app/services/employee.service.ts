import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeSerializer } from '../serializers/employee-serializer';
import { environment } from 'src/environments/environment';
// import { Employee } from '../pages/employee/model/model';
// import { Producto } from '../pages/product/model/product.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee: EmployeeSerializer;

  constructor(private http: HttpClient) { }

  /* getEmployee(): Observable<Array<Employee>> {
    return this.http.get<Array<Array<Employee>>>(environment.API_BASE + 'producto')
      .pipe(
        map(data => data.pop().map(item => this.employee.fromJson(item)))
      );
  } */
  getEmployee(): void{
    console.log('IUJUUU');
  }
}
