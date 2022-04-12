import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  getTheme(theme: string) {
     this.modeService.setTheme(theme)
     console.log('nav')
  }

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
  }

}
