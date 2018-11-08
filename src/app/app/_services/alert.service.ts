import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChanges = false;
  constructor(private router : Router) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(this.keepAfterNavigationChanges) {
          this.keepAfterNavigationChanges = false;
        } else {
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChanges = false) {
    this.keepAfterNavigationChanges = keepAfterNavigationChanges;
    this.subject.next({type: 'success', text: message});
  }

  error(message: string, keepAfterNavigationChanges = false) {
    this.keepAfterNavigationChanges = keepAfterNavigationChanges;
    this.subject.next({type: 'error', text: message});
  }

  getMessage() : Observable<any> {
    return this.subject.asObservable();
  }
}
