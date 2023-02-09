import { RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <div style="display: flex; height: 90vh; align-items: center; justify-content: center">
        <div fxLayout="row" fxLayoutAlign="center center" fxFlexFill>
          <mat-card fxFlex="40" class="mat-card-curved-corners">
            <mat-toolbar color="primary" class="mat-toolbar-curved-corners" >Welcome</mat-toolbar>
            <form fxLayout="column" fxLayoutAlign="stretch">
              <mat-form-field appearance="fill">
                <mat-label>Enter User-name</mat-label>
                <input matInput placeholder="User-name">
              </mat-form-field>
              <mat-form-field appearance="fill">
                <mat-label>Enter the Password</mat-label>
                <input matInput type="password" placeholder="Password">
              </mat-form-field>
              <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
                <button mat-raised-button type="submit" color="primary" style="width: 100%">
                  Login
                </button>
              </mat-card-actions>
              <mat-card-actions fxLayout="row" fxLayoutAlign="center center">
                <a [routerLink]="['/signup']" class="link">Don't have an account? Sign up</a>
              </mat-card-actions>
            </form>
          </mat-card>
        </div>
      </div>
    <ng-container *ngIf="showSignup">
        <router-outlet></router-outlet>
    </ng-container>
    <app-contact-us-button></app-contact-us-button>
  `,
  styles: [
  ]
})
export class HomeComponent {
  showSignup = false;
  
  constructor() { }
}