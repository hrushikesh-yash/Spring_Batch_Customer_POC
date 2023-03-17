import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Customer } from 'src/app/Model/Customer';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
  displayedColumns: string[] = ['id', 'first Name', 'Last Name', 'Email', 'Gender', 'Contact No', 'Country', 'Dob'];
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {

    this.getAllCustomers();
  }

  getAllCustomers() 
  {
    this.customerService.getAllCustomers().
      subscribe(Response => {
        this.dataSource = new MatTableDataSource<Customer>(Response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      });

      
  }




}
