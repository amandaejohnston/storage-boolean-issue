import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  test = 1;
  hiddenSelected = false;
  ngIfSelected = false;

  onRadioValueChanged(event: any, type: 'hidden' | 'ngIf') {
    console.log('radio trigger');
    if(type === 'hidden') {
      this.hiddenSelected = !this.hiddenSelected;
    } else {
      this.ngIfSelected = !this.ngIfSelected;
    }
  }

  onIncreaseValue(event: any) {
    // event.preventDefault();
    // event.stopPropagation();
    console.log('on increase value');
    this.test += 1;
    // return false;
  }

}
