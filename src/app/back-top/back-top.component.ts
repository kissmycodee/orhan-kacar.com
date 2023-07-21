import { Component, Input, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById('back-top2')?.classList.add('d-none');
  }
}

addEventListener('scroll', function () {
  let isOnTop = true;

  if (isOnTop && this.scrollY <= 750) {
    this.document.getElementById('back-top2')?.classList.add('d-none');
  } else {
    this.document.getElementById('back-top2')?.classList.remove('d-none');
    isOnTop = false;
  }
});