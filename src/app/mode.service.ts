import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  theme: string = 'main'


  constructor() { }

  setTheme(_theme: string) {
    this.theme = _theme
    console.log(_theme)
  }



}
