import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../interfaces/employee.interface';
import { EmployeeService } from '../services/employee.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { EmployeeEventService } from '../services/employee-event.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  employee: IEmployee[] | undefined;

  constructor(
    private employeeService: EmployeeService,
    public activeModal: NgbActiveModal,
    private employeeEvent: EmployeeEventService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void {
    this.employeeService.getAll().subscribe(
      (employee: IEmployee[]) => {
        this.employee = employee;
      }  
    )
  };

  onSubmit(form: NgForm): void {
    if(form.valid) {

      const employeeData: IEmployee = {
        name: form.value.name,
        office: form.value.office,
        department: form.value.department,
        admissionDate: form.value.admissionDate,
        birthDate: form.value.birthDate,
        adress: form.value.adress,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber,
        salary: form.value.salary,
        status: form.value.status,
        workedHours: form.value.workedHours,
      };

      this.employeeService.saveEmployee(employeeData).subscribe(
        (response) => {
          console.log(response);
          this.employeeEvent.triggerEmployeeUpdated();
        },
        (erro) => {
          console.log(erro);
        }
      );

    };
    
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }
}
