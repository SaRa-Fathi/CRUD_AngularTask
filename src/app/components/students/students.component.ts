import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;
  name: any;
  age: any;
  constructor(public service:CustomService){}
  ngOnInit(): void {
    return this.getAll();
  }
  getAll(){
    this.service.getAllStudents().subscribe(
      {
      next:(data)=>{
        console.log(data);
        this.students=data.body;
      },
      error:(err)=>{
        console.log(err);

      }
    }
    )
  }
  deleteStud(student:any)
  {
    this.service.deleteStudent(student.id).subscribe(res=>{
      alert('Are You Sure ?');
      this.getAll();
    })
  }
  
}
