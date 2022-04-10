import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public results: any[] = []

  constructor(private http: HttpClient) { }

  resultsApi() {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .subscribe((resp: any) => {
      this.results = resp.drinks;
      console.log(resp.drinks)
    })


    // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    // .then(response => response.json())
    // .then(data => data);
  }
  

}
