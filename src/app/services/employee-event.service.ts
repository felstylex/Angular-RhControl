import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeEventService {

  private employeeUpdatedSource = new Subject<void>();

  employeeUpdated = this.employeeUpdatedSource.asObservable();

  triggerEmployeeUpdated() {
    this.employeeUpdatedSource.next();
  }}
