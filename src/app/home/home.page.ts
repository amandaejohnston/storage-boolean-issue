import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tabs = [{
    id: 1,
    name: 'Ionic'
  }, {
    id: 2,
    name: 'Angular'
  }, {
    id: 3,
    name: 'React'
  }, {
    id: 4,
    name: 'Vue'
  }];
  selectedTab = 1;


  onSelectedTab(tab) {
    this.selectedTab = tab.id;
  }
}
