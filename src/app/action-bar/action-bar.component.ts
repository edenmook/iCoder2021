import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  
  cost = 0;
  @Input() step = 1;
  @Input() notBelow = 1;
  @Input() notMore:null|number = null;

  @Output() numberChange = new EventEmitter();
  @Input() get number(){
    return this.cost;
  }
  
  set number(value: number){
    this.cost = value;

  }
  
  
  constructor() { }

  ngOnInit(): void {
    this.cost =this.number;
  }

  decrease(){
    if((this.cost - this.step)>=this.notBelow)
    {
      this.cost = this.cost - this.step;
    }
    this.numberChange.emit(this.cost);
    
  }
  increase(){
    if(this.notMore===null)
    {
      this.cost = this.cost + this.step;
    }
    else if((this.cost + this.step)<=this.notMore)
    {
      this.cost = this.cost + this.step;
    }
    this.numberChange.emit(this.cost);
  }

}
