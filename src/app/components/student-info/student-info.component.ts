import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  ID=0;
  student:any;
  constructor(myRoute:ActivatedRoute ,public service:CustomService)
  {
    this.ID=myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.service.getStudent(this.ID).subscribe({
      next:(data)=>{
        this.student =data;
      },
      error:(err)=>{}
    })
  }

}
