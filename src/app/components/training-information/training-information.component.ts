import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TrainingserviceService } from 'src/app/services/trainingservice.service';


@Component({
  selector: 'app-training-information',
  templateUrl: './training-information.component.html',
  styleUrls: ['./training-information.component.css']
})
export class TrainingInformationComponent {

  training:any;
  trainingTechnology: any;
  id: any;

  constructor(private service:TrainingserviceService){ }

  public deleteTraining(id:number){
    let resp = this.service.deleteById(id);
    resp.subscribe((data)=>this.training=data);
  }
  public addTraining(){
    let resp = this.service.addInformation();
    resp.subscribe((data)=>this.training=data) 
  }
  public getTrainingByTech(){
    let resp = this.service.viewAllInformationByTech(this.trainingTechnology)
    resp.subscribe((data:any)=>this.training=data);

  }

  

  ngOnInit(){

   let resp = this.service.getInformation();

   resp.subscribe((data) =>this.training=data);
  }

}
