import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ContactUsButtonComponent } from './contact-us-button/contact-us-button.component';

@NgModule({
declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    HomeComponent,
    ContactUsButtonComponent
    
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }