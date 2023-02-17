import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  Validate_Form = new FormGroup({
    name: new FormControl("",[Validators.minLength(4),Validators.required]),
    age: new FormControl("",[Validators.min(20), Validators.max(40)]),
    email: new FormControl(" ",[Validators.email , Validators.required]),
    phone: new FormControl(" ",Validators.required),
    address: new FormControl(" ",Validators.required)
  })

  get NameCheck(){
    return this.Validate_Form.controls["name"].valid
  }

  get AgeCheck(){
    return this.Validate_Form.controls["age"].valid
  }

  get EmailCheck(){
    return this.Validate_Form.controls["email"].valid
  }
  get phoneCheck(){
    return this.Validate_Form.controls["phone"].valid
  }
  get addressCheck(){
    return this.Validate_Form.controls["address"].valid
  }
  show:string="";
  constructor(public myRoute:ActivatedRoute ,public service:CustomService){}
  validate(){
    if(this.Validate_Form.valid){
      this.show ="Student added Successfully" ;
      let newStudent={
        name:this.Validate_Form.controls["name"].value,
        age:this.Validate_Form.controls["age"].value,
        email:this.Validate_Form.controls["email"].value,
        phone:this.Validate_Form.controls["phone"].value,
        address:this.Validate_Form.controls["address"].value
      }
      this.service.addStudent(newStudent).subscribe();
    }
  }


}
