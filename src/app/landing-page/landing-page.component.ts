import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private error: string;

  data = {
    sugarLevel: "",
    date: "",
    carbs: false,
    protein: false,
    fat: false,
    time: ""
  }

  getVal(sl, d, yes, no, c, p, f, time): void{
    let gotSL = this.getSugarLevel(sl);
    let gotData = this.getDate(d);
    let gotFood = this.getFood(yes, no, c, p, f,  time);

    if(!(gotSL && gotData && gotFood)) {
      alert(this.error);
    }
    else{
      console.log(this.data);
    }

    this.data.carbs = false;
    this.data.fat = false;
    this.data.protein = false;
    this.data.time = "";
    this.error = "";
  }

  getSugarLevel(sl): boolean {
    let sugarLevel = sl.value;

    if(isNaN(sugarLevel) == false && sugarLevel !== "") {
      this.data.sugarLevel = sugarLevel;
      return true;
    } else {
      this.error += "\nAn invalid value was entered for the sugar level.";
    }
    return false;
  }

  getDate(date): boolean {
    let d = date.value;

    if(d !== "") {
      this.data.date = d;
      return true;
    } else {
      this.error += "\nPlease select a date.";
    }
    return false;
  }

  getFood(yes, no, carbs, protein, fat, time): boolean {
    let y = yes.checked;
    let n = no.checked;
    let c = carbs.checked;
    let p = protein.checked;
    let f = fat.checked;
    let t = time.value;

    if(y) {
      if((c == false) && (p == false) &&  (f == false)) {
        this.data.carbs = c;
        this.data.fat = f;
        this.data.protein = p;
        this.error += "\nPlease indicate what you ate.";
      } else {
        return true;
      }
    } else if (n) {
      if(t !== "") {
        this.data.time = t;
        return true;
      } else {
        this.error += "\nPlease indicate what time you last ate.";
      }
    } else {
      this.error += "\nPlease indicate whether you ate before you tested for your sugar level.";
    }

    return false;
  }

}