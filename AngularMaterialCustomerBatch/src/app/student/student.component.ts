import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostModel } from '../Model/PostModel';
import { FakeCustomerService } from '../Services/fake-customer.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  private sub!: Subscription;
  postData!: PostModel[];
  constructor(private service: FakeCustomerService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    debugger
    this.sub = this.service.getListOfData().subscribe((post) => {
      this.postData = post;
    });
  }

  customerName: string = 'Google'
  name = "Amazon";
  num=25;
  num1 = 100;
  num2 = 20;
  userReadOnly = false;
  type = "number";
  placeholder = "Give number";
  ariaLabel = "NewAriaLabel";
  label = "New Label";

  colorNames = ["Red", "Green", "Yellow", "Blue", "Magenta", "Black", "White"];

  colorlist=[
    {
      colorName: 'Red',
      id:1
    },

    {
      colorName: 'Black',
      id:2
    },
    {
      colorName: 'white',
      id:3
    },

    {
      colorName: 'yellow',
      id:4
    },
  
  ] ;





  submitClick() {
    this.label = "Submit button Clicked";
  }

  resetClick() {
    this.label = "Reset button Clicked";
  }

  onChangesInput() {
    this.label = "Label value changed";
  }

  onChangesLabelInput(event: any) {
    this.label = event.target.value;
  }


  setName() {
    this.customerName = "Reset Value";
  }

}
