import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "register", component: RegisterComponent},
  {path: "employee", component: MainPageComponent, canActivate: [AuthGuard]},
  {path: "employee/:id", component: EmployeeDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
