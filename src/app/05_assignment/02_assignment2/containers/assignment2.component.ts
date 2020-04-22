import { Component } from '@angular/core';
import {AssignmentComponent} from 'src/app/05_assignment/assignment.component'

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
 
export class Assignment2Component {
  mydata: any
  selectedItem:any
  constructor() {
    this.mydata = new AssignmentComponent()
    console.log(this.mydata.todos[0])
    
  }
  listClick(event, newValue) {
    
   
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}

}
