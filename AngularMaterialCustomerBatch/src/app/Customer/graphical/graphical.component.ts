import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { countryCount } from 'src/app/Model/genderCount';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';
import { productSales } from './product';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graphical',
  templateUrl: './graphical.component.html',
  styleUrls: ['./graphical.component.css']
})
export class GraphicalComponent implements OnInit {

  customer!: countryCount[];
  countryName: any = [];
  countryCount: any = [];
  public chart: any;
  name: any;


  constructor(private customerService: CustomerServiceService) {

  }

  ngOnInit(): void {
    this.customerService.getCustomersByGender().
      subscribe(Response => {

        this.customer = Response;

       
        for (let i = 0; i < this.customer.length; i++) {
          this.countryName.push(this.customer[i].countryName);
          this.countryCount.push(this.customer[i].countryCount)
        }

       

        this.chart = new Chart("MyChart", {
          type: 'bar', //this denotes tha type of chart
          data: {// values on X-Axis
            labels: this.countryName,
            datasets: [
              {
                label: "Countrywise Distribution",
                data: this.countryCount,
                backgroundColor: 'Red',
                
              },
            ]
            
          },
          options: {
            aspectRatio: 1,
          },
          


        });

      });


  }

}
