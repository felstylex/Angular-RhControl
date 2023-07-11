import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../interfaces/employee.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { EmployeeEventService } from '../services/employee-event.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  employees: IEmployee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private employeeEvent: EmployeeEventService,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.employeeEvent.employeeUpdated.subscribe(() =>{
      this.getAll();
    })
  }

  getAll():void {
    this.employeeService.getAll().subscribe(
      (employee: IEmployee[]) => {
        this.employees = employee;
      }  
    )
  };

  openModal() {
    this.modalService.open(FormComponent);
  }

  logout() {
    this.authService.logout();
    this.route.navigate(["/login"]);
  }
}
