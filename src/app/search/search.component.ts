import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;

  
  constructor() { }
  
  search() {
    console.log(this.txtInput.nativeElement.value);
   /*  this.apiService.apiResults(this.txtInput.nativeElement.value);
    this.txtInput.nativeElement.value = '' */
  }

  ngOnInit(): void {
  }

}
