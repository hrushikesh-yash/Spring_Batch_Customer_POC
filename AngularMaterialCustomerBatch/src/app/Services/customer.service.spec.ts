import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from '../Model/Customer';


describe('CustomerService', () => {
  let service: CustomerService;
  let httpClient: HttpClient;
  let httptestController: HttpTestingController;
   let Customer!: Customer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CustomerService]
    });
    service = TestBed.inject(CustomerService);
    httptestController=TestBed.inject(HttpTestingController);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('get customer Service Methods', () => {


  //   service.getAllCustomers().subscribe(Customer => {
  //     expect(Customer).toBe(Customer);
  //   });

  //   const request = httptestController.expectOne(service.baseURL);
  //   expect(request.cancelled).toBeFalsy();
  //   expect(request.request.responseType).toEqual('json');

  //   httptestController.verify();
  // });

   
});
