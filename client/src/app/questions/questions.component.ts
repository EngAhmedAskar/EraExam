import { Component, OnInit, Input } from '@angular/core';
import { EraServiceService } from '@app/era-service.service';
import { Observable } from 'rxjs';

const ELEMENT_DATA: object[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
   questions: Array<object>  ;
   private columnsToDisplay = ['description', 'is_active'];
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private EraServiceService :EraServiceService) {

   EraServiceService.getQuestions().subscribe(data=>this.questions= JSON.parse(data));


  }
  ngOnInit() {
  }
  updateQ(e : any){
  if (e.is_active=true) {
    e.is_active=false;
  }else{
    e.is_active=true;
  }
     this.EraServiceService.updateQuestion(e,e._id).subscribe();

  }
}
