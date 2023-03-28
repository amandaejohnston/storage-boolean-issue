/* eslint-disable no-underscore-dangle */
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isSkeletonShow = true;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    setTimeout(() => {
      this.isSkeletonShow = false;
    }, 3000);
  }
}
