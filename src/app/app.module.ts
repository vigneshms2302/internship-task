import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';
import { Component } from '@angular/core';
const firebaseConfig = {
  apiKey: "AIzaSyDFze24nLTcs92qMDOXyTZHrv2IxsQcrkA",
  authDomain: "finsurge-task.firebaseapp.com",
  projectId: "finsurge-task",
  storageBucket: "finsurge-task.appspot.com",
  messagingSenderId: "746160266398",
  appId: "1:746160266398:web:1481d98bab46127a436f8f",
  measurementId: "G-0C1FJBTW1S"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const routes: Routes = [
  { path: '', component: HomeComponent,children: [ {path: 'portfolio', component: HomeComponent,children:[  { path: 'work', component: WorkComponent },{ path: 'about', component: AboutComponent }]},
   ]},
   { path: 'work', component: WorkComponent },
   { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }

  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SignupComponent,
       NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';
// import { AppComponent } from './app.component';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatInputModule} from '@angular/material/input';
// import { LoginComponent } from './login/login.component';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatCardModule} from '@angular/material/card';
// import { MatToolbarModule} from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { SignupComponent } from './signup/signup.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { SideNavComponent } from './side-nav/side-nav.component';

// @NgModule({
// declarations: [
//     AppComponent,
//     LoginComponent,
//     SignupComponent,
//     HomeComponent,
//     HeaderComponent,
//     FooterComponent,
//     SideNavComponent,
    
   
    
//   ],
//   imports: [
//     RouterModule,
//     MatToolbarModule,
//     MatCardModule,
//     MatFormFieldModule,
//     FlexLayoutModule,
//     BrowserModule,
//     MatButtonModule, 
//     MatCheckboxModule,
//     MatGridListModule,
//     MatInputModule,
//     MatIconModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     MatTooltipModule,
    
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

