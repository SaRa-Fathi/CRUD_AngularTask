import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private client:HttpClient) { }
  private Base_URL = "http://localhost:3000/students";
  getAllStudents(){
    return this.client.get(this.Base_URL,{observe:"response"});
  }
  getStudent(id:any){
    return this.client.get(this.Base_URL+"/"+id)
  }
  addStudent(student:any){
    return this.client.post(this.Base_URL,student);
  }
  updateStudent(id:number, student:any){
    return this.client.put(this.Base_URL+"/"+id, student);

  }
  deleteStudent(id:any){
    return this.client.delete(this.Base_URL+"/"+id);
  }
}
