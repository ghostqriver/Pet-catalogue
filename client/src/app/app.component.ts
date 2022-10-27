import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private router: Router) { }
  list = [{
    title: "Main Page",
    path: "my_page",
  }, {
     title: "My Pet",
    path: "my_pet",
    }, {
    title: "About",
    path: "about"
    }]
  isSelect = 0;

  goNav(val: string, index: number) {
    this.isSelect = index;
    this.router.navigate([val])
  }
  goHome() {
    this.isSelect = 0;
    this.router.navigate(["my_page"])
  }
}
