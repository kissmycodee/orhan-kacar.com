import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  all = true;
  angular = true;
  java = true;

  jsProjects = false;
  angProjects = false;

  pokedox = false;
  game = false;
  join = false;
  ringoffire = false;
  website = false;
  weather = false;
  allProjects() {
    this.all = true;
    this.java = true;
    this.angular = true;
    this.jsProjects = false;
    this.angProjects = false;
  }
  angularProjects() {
    this.angular = true;
    this.angProjects = true;
    this.all = false;
    this.java = false;
    this.jsProjects = false;
  }

  javaProjects() {
    this.java = true;
    this.jsProjects = true;
    this.all = false;
    this.angular = false;
    this.angProjects = false;
  }
}
