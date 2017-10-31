import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counter;

  constructor() { }
  
  ngOnInit() {

    this.counter = 0;

    setInterval(() => { if(this.counter < 100) this.counter++; }, 100);

  }

}