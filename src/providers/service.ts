import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {
  url : string = "http://jsonplaceholder.typicode.com/posts";
  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  username: string = "John";
  parameters:{s1?:{},s2?:{},s3?:{},s4?:{},s5?:{},s6?:{}} = {};
  //signup: {firstname?: string, lastname?: string, email?:string, password?:string,confirmpassword?:string} = {};

    getPosts(): Observable<any> {
    return this.http.get(this.url)
      .map((res)=>res.json());
  }

}
