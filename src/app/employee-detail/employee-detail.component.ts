import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../interfaces/employee.interface';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.less']
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: string | undefined | null;
  employeeInfos: IEmployee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id') || "";
    this.getById(this.employeeId);
  }

  getById(id: string) {
    this.employeeService.getById(id).subscribe(
      (employee: IEmployee) => {
        this.employeeInfos = employee;
      }
    );
  }

  deleteEmployee() {
    if(confirm("Tem certeza que deseja excluir esse funcionário?")) {
      this.employeeService.deleteEmployee(this.employeeId).subscribe(() => {
        this.router.navigate(["employee"])
      })
    };
  }

  updateEmployee() {
    if(confirm("Deseja atualizar as informações desse funcionário")) {
      this.employeeService.updateEmployee(this.employeeInfos).subscribe(
        () => {
          alert("Informações atualizadas com sucesso");
        })
    };
  }

}
