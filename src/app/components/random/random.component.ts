import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  char: string;
  icon: string;
  iconArray: string[];

  constructor() {
    this.char = undefined;
    this.icon = undefined;
    this.iconArray = ['fas fa-dog', 'fas fa-home', 'fas fa-utensils'];
  }

  ngOnInit() {
    this.random();
  }

  random() {
    this.randomChar();
    this.randomIcon();
  }

  randomIcon() {
    this.icon = undefined;
    let rnum = Math.floor(Math.random() * this.iconArray.length);
    this.icon = this.iconArray[rnum];
  }

  randomChar() {
    const chars = "ABCDEFGHIJKLMNOPRSTUWTZ";

    this.char = undefined;
    let rnum = Math.floor(Math.random() * chars.length);
    this.char = chars.substring(rnum,rnum+1);
  }

}