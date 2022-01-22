import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-month',
  templateUrl: './add-month.component.html',
  styleUrls: ['./add-month.component.scss']
})
export class AddMonthComponent implements OnInit {
 public isViewFirst: boolean = true
  constructor() { }

  ngOnInit(): void {
   
  }

  onButtonClick(){
    console.log('añadir Milestone')
    this.isViewFirst = !this.isViewFirst
    console.log(this.isViewFirst)
    
  }
}
