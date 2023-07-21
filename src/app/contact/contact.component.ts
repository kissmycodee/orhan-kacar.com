import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
    //or https://my-domain/sendMail.php if you have SSL-Certificate Active
    endPoint: 'http://orhan-kacar.com/mail.php',

    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  submitForm(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => this.errorSnackBar(),
          complete: () => this.sentSnackBar(),
        });
      ngForm.reset();
    }
  }
  sentSnackBar() {
    this._snackBar.open('Email sent', 'Close');
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 5000);
  }
  errorSnackBar() {
    this._snackBar.open(
      'Email could not be sent. Please contact me direct on hello@orhan-kacar.com',
      'Close'
    );
  }
}