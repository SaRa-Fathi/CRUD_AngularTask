import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponent } from './components/error/error.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

import { StudentInfoComponent } from './components/student-info/student-info.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path:"",component:StudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentInfoComponent},
  {path:"addStudent",component:AddStudentComponent},
  {path:"update/:id",component:UpdateStudentComponent},
  {path:"error",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
