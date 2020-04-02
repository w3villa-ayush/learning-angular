import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  messageAlert(){

    alert("thanks for subscribe with using service with injectable")
  }
product() : Observable<any>{
 return this.http.get('https://jsonplaceholder.typicode.com/users')
}

// userName = new Subject<any>();

  userName = new BehaviorSubject('ayush');
 
}
