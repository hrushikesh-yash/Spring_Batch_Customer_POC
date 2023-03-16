import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Model/Customer';
import { countryCount } from '../Model/genderCount';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService 
{

  baseURL:String="http://localhost:8081/jobs";

  constructor(private httpClient:HttpClient) { }


  getAllCustomers():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(this.baseURL+"/getAllCustomers");
  }


  getCustomersByGender():Observable<countryCount[]>
  {
    return this.httpClient.get<countryCount[]>(this.baseURL+"/getDataByCountry");
  }

}
