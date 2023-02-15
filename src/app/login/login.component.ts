import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const { email, password } = this.form.value;
    this.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
        // TODO: navigate to home page
      })
      .catch(error => {
        console.log(error);
        // TODO: display error message to user
      });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
//   })
// export class LoginComponent implements OnInit {
//   public loginForm: FormGroup;

//   constructor() {
//     this.loginForm = new FormGroup({});
//   }

//   ngOnInit() {
//     this.loginForm = new FormGroup({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       // submit the form
//     }
//   }
// }

