import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  char: string;
  icon: string;
  iconText: string;
  iconArray: string[];
  iconArrayText: string[];

  constructor() {
    this.char = undefined;
    this.icon = undefined;
    this.iconText = undefined;
    this.iconArray = ['fas fa-dog', 'fas fa-home', 'fas fa-utensils', 'fab fa-raspberry-pi', 'fas fa-carrot', 'fas fa-palette', 'fas fa-male'];
    this.iconArrayText = ['Tier', 'Gegenstand', 'Gericht', 'Obst', 'Gemüse', 'Farbe', 'Person'];
  }

  ngOnInit() {
    this.random();
  }

  timer() {
    //setInterval(() => this.random(), 300);
  }

  random() {
    this.randomChar();
    this.randomIcon();
  }

  randomIcon() {
    this.icon = undefined;
    this.iconText = undefined;
    let rnum = Math.floor(Math.random() * this.iconArray.length);
    this.icon = this.iconArray[rnum];
    this.iconText = this.iconArrayText[rnum];
  }

  randomChar() {
    const chars = "ABCDEFGHIJKLMNOPRSTUWTZ";

    this.char = undefined;
    let rnum = Math.floor(Math.random() * chars.length);
    this.char = chars.substring(rnum,rnum+1);
  }

}
