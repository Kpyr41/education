import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

declare var $: any; // Declare $ for TypeScript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'yrp';
  constructor(private router:Router){}
  routerSub!:Subscription;
  ngOnInit():void{
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy(){
    this.routerSub?.unsubscribe();
  }
}