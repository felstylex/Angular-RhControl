import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  URL = "https://java-rhcontrol-production.up.railway.app/employee";

  getAll() {
    return this.http.get<IEmployee[]>(this.URL);
  }

  getById(id: string) {
    return this.http.get<IEmployee>(this.URL + `/${id}`);
  }

  saveEmployee(data: IEmployee) {
    return this.http.post<IEmployee>(this.URL, data);
  }

  updateEmployee(data: IEmployee | undefined) {
    return this.http.put<IEmployee>(this.URL + `/${data?.id}`, data);
  }

  deleteEmployee(id: string | undefined | null) {
    return this.http.delete<IEmployee>(this.URL + `/${id}`);
  }
} 
