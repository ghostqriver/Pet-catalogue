import { Component, OnInit } from '@angular/core';
import http from 'src/utils/request';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.less']
})
export class MyPageComponent implements OnInit {
  allCount = 0;
  delCount = 0;
  constructor() { }


  getCount() {
    http.get("pet_count").then(res => {
      const data = res.data.data;
      this.allCount = data.length;
      this.delCount = data.filter((item: { date_death: any; }) => item.date_death).length;
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.getCount()
  }

}
