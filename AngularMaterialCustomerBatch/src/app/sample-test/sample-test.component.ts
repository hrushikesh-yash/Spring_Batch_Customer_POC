import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostModel } from '../Model/PostModel';
import { FakeCustomerService } from '../Services/fake-customer.service';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent  {

 

  header: string = '';

  showMessage(message: String): String {
    return message;
  }

  Addition(num1: number, num2: number): number {
    return num1 + num2;
  }

  getHeader() {
    this.header = "Sample component";
  }

}
