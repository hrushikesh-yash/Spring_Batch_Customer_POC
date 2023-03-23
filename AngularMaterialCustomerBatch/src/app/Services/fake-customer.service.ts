import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../Model/PostModel';

@Injectable({
  providedIn: 'root'
})
export class FakeCustomerService {

  jsonURL:string = 'https://jsonplaceholder.typicode.com/';

  constructor(public http:HttpClient) {
   }


   public getListOfData()
   {
    return this.http.get<PostModel[]>(this.jsonURL+'posts');
   }

   public PostListOfData(posts:PostModel)
   {
    const headers= new HttpHeaders();
    return this.http.post(this.jsonURL+'posts', posts,{headers});
   }
}
