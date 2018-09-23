
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class myService  {
  constructor(private http : HttpClient){
   
  }

getUsers(){
  // return this.http.get('https://jsonplaceholder.typicode.com/users');
  return this.http.get('../assets/data.json');

}

}
 
