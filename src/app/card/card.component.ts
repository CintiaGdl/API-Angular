import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  get results() {
   return this.apiService.results;
  } 
  
  constructor(private apiService: ApiService) { 
    this.apiService.resultsApi();
  }
  

  ngOnInit(): void {
  }

}
