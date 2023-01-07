import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TrainingserviceService {

  
  constructor(private http:HttpClient) { }

     getInformation(){
      return this.http.get("http://localhost:9131/viewAllInformation");
    }
    public deleteById(id: any){
      return this.http.delete("http://localhost:9131/deleteInformation/"+id);
    }
    public addInformation(){
      return this.http.delete("http://localhost:9131/addInformation");
    }
    public viewAllInformationByTech(trainingTechnology:any){
      return this.http.get("http://localhost:9131/viewAllInformationByTech/"+trainingTechnology);
    }
    
  }