import { HeaderService } from './../app-service/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  goBackLink;
  headerNav;
  headerLoginBlock;
  headerContactDeatails;
  loggedInUser;



  constructor(private _header:HeaderService, private router:Router) { 
   this._header.headerContactDeatails.subscribe(res => {
     this.headerContactDeatails = res;

   })
   this._header.headerNav.subscribe(res => {
    this.headerNav = res;

  })
  this._header.goBackLink.subscribe(res => {
    this.goBackLink = res;

  })
  this._header.headerLoginBlock.subscribe(res => {
    this.headerLoginBlock = res;

  })
  this._header.loggedInUser.subscribe(res => {
    this.loggedInUser= res;

  })





  }

  ngOnInit(): void {
  }

}
