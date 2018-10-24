import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '@app/admission/admission.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  admissions : Array<object>  ;


  constructor(private AdmissionService :AdmissionService) {

    AdmissionService.getAdmission().subscribe(data=>this.admissions= JSON.parse(data));


  }
  ngOnInit() {
  }
  updateQ(e : any){

  if (e.is_activate=true) {
    e.is_activate=false;
  }else{
    e.is_activate=true;
  }
  console.log(e.is_activate)
     this.AdmissionService.updateAdmission(e,e._id).subscribe();

  }

}
