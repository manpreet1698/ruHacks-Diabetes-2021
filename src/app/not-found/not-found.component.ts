import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  randomDogImage:any;
  constructor() {
    let requiredUrl = `https://dog.ceo/api/breeds/image/random`;
    fetch(requiredUrl)
    .then(res => res.json())
    .then(data => {
      this.randomDogImage = data.message;
    })
   }
  ngOnInit(): void {}

}
