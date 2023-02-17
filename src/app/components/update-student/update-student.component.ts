import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from 'src/app/services/custom.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  show:string="";
  ID=0;
  public student:any = {
    name:'',
    age:0,
    email:'',
    address:'',
    phone:''
  };
  constructor(public myRoute:ActivatedRoute ,public service:CustomService )
  {
    this.ID=myRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.service.getStudent(this.ID).subscribe( {
      next:(data)=>{
        this.student = data;
      },
      error:(error)=>{
        console.log(error);

      }

    });
  }
  onSubmit(){

      this.service.updateStudent(this.ID,this.student).subscribe(
        {
        next:(data) => {
          this.student=data;
        },
        error:(err) => {
          console.log(err);
        }
      }
      );
      this.show ="Student updated Successfully" ;
  }


}
