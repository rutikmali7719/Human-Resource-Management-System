import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgModel } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'NAME', 'EMAIL', 'DEPARTMENT','ADHAAR-NO'];
  dataSource = new MatTableDataSource();
  filteremp:String=" ";
  role:number=0;
  employeeList: any;
  constructor(private readonly employeeService:EmployeeService,
    private readonly route:Router
   ){
  }
  ngOnInit(): void {
    this.employeeService.getData().subscribe((response)=>{ 
      console.log(response);
      this.dataSource=response
     })
  }


  getEmployeeList(){
    this.employeeService.getData().subscribe((response)=>{ 
      console.log(response);
      this.employeeList=response
      
     })
  } 

  filterempMethod(value:any){

  }

  addEmployee(){
    this.route.navigate(['./addEmployee'])
    
  }
  
}
