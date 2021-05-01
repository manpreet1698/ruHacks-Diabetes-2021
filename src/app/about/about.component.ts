import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
randomCatImage:any;
  constructor() {
    let requiredUrl = `https://api.thecatapi.com/v1/images/search`;
    fetch(requiredUrl)
    .then(res => res.json())
    .then(data => {
      this.randomCatImage = data[0].url;      
    })
   }

  ngOnInit(): void { }

}
