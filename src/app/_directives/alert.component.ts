import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services';

@Component({
  selector: 'alert',
  template: `<div *ngIf="message" [ngClass]="{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }">{{message.text}}</div>`
})
export class AlertComponent implements OnInit, OnDestroy{
  private subscription : Subscription;
  mesage : any;

  constructor(private alertService : AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(
      mesage => {
        this.mesage = mesage;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
