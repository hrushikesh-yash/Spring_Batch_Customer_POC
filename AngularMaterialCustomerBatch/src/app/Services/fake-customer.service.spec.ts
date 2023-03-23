import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostModel } from '../Model/PostModel';

import { FakeCustomerService } from './fake-customer.service';

describe('FakeCustomerService', () => {
  let service: FakeCustomerService;
  let httpClient: HttpClient;
  let httptestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeCustomerService]
    });
    service = TestBed.inject(FakeCustomerService);
    httptestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('HTTP Client Get Method', () => {

    const testPost: PostModel[] = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    ]

    service.getListOfData().subscribe(posts => {
      expect(testPost).toBe(posts, 'should  check mocked data');
    });

    const request = httptestController.expectOne(service.jsonURL + 'posts');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toEqual('json');
    request.flush(testPost);
    httptestController.verify();
  });

  it('HTTP Client Post Method', () => {

    const testPost: PostModel =
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    service.PostListOfData(testPost).subscribe((posts) => {
      expect(testPost).toBe(testPost);
    });

    const request = httptestController.expectOne(service.jsonURL + 'posts');
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toEqual('json');
    request.flush(testPost);
    httptestController.verify();
  });


  it('Http Client 404 Error test', () => {

    const errorMesg = '404 error occured';
    service.getListOfData().subscribe((posts) => {
      fail('failing to get data');
    },
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMesg);
      });

      const request = httptestController.expectOne(service.jsonURL + 'posts');
      request.flush(errorMesg,{status: 404,statusText: 'Not Found'});      
      httptestController.verify();

  });

});
