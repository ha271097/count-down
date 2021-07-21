import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  constTime = 10;
  start : any;
   
  constructor() { }

  ngOnInit(): void {
  }
 
  startTime(){
  this.start = setInterval(() => this.constTime --, 1000);
 }
 stopTime(){
   clearInterval(this.start);
 }

}
