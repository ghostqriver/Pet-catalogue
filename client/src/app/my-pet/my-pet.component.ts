import { Component, OnInit } from '@angular/core';
import http from 'src/utils/request';
import {Router } from '@angular/router';

interface ListType {
  id: string;
  name: string;
  species: string;
  date_birth: string;
  date_death: string;
  remark: string;
}

@Component({
  selector: 'app-my-pet',
  templateUrl: './my-pet.component.html',
  styleUrls: ['./my-pet.component.less']
})


export class MyPetComponent implements OnInit {
  list: ListType[] = [];
  constructor(private router: Router) { }

  getList() {
    http.get("pet").then(res => {
      const data = res.data.data;
      console.log(data, 'data_list');
      this.list = data;
    })
  }
  editFun(item: ListType) {
    console.log(item, 'editFun');
    this.router.navigate(['edit_pet'], {
      queryParams: {
        id: item.id
      }
    })
  }
  delFun(item: ListType) {
    var r = confirm("Are you sure to delete ?");
    if (r == true) {
      console.log('sub');
      console.log(item, 'delFun');
      http.delete("/pet/" + item.id).then(res => {
        this.getList();
        console.log(res.data);
        alert("delete success");
      })
    } else {
       console.log('no');
    }
  }
  addFun() {
    this.router.navigate(["edit_pet"])
  }

  ngOnInit(): void {
    this.getList();
  }

}
