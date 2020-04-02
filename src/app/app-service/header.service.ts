import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  constructor() { }

  headerNav = new BehaviorSubject(true);
  headerContactDeatails = new BehaviorSubject(false) //for header 
  goBackLink = new BehaviorSubject({text:'',url:''});
  headerLoginBlock= new BehaviorSubject(true);
  loggedInUser = new BehaviorSubject(true);
}
