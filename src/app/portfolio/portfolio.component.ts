import { Component } from '@angular/core';
import path from 'node:path';
import { URL, Url } from 'node:url';
import { StarDesignComponent } from "../star-design/star-design.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarDesignComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})



export class PortfolioComponent {


  itemImageUrl = 'img/poert1.png';

  itemImageUrls = {
    img1: 'img/poert1.png',
    img2: 'img/port2.png',
    img3: 'img/port3.png'

  };



  onclick = false;

  toggleoverly() {
    this.onclick = true;
  }
}
