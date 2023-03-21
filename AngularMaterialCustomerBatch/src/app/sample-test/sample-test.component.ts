import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent {

  header:string='';

  showMessage(message: String): String {
    return message;
  }

  Addition(num1: number, num2: number): number {
    return num1 + num2;
  }

  getHeader() {
    this.header="Sample component";
  }

}
