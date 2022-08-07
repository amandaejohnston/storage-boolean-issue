import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  test = 1;

  onRadioValueChanged(event: any) {
    console.log('radio trigger');
  }

  onIncreaseValue(event: any) {
    console.log('on increase value');
    this.test += 1;
  }

}
