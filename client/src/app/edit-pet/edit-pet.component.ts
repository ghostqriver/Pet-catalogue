import { Component, OnInit } from '@angular/core';
import http from 'src/utils/request';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.less']
})
export class EditPetComponent implements OnInit {
  model: any = {
    name: '',
    species: '',
    date_birth: '',
    date_death: '',
    remark: '',
  }
  isEdit = false;
  constructor(private router: Router, private activateInfo:ActivatedRoute) {
    activateInfo.queryParams.subscribe((querParams: any) => {
      const id = querParams.id;
      console.log(id);
      if (id) {
        this.isEdit = true;
        http.get("/pet/" + id).then(res => {
          const data = res.data.data;
          this.model = data;
          console.log(data, 'see one data');
        })
      }
    })
  }

  ngOnInit(): void {
  }
  submit() {
    if (!this.model.name || !this.model.species) {
      alert('place name,species')
      return;
    }
    if (!this.model.id) {
      http.post('/pet', this.model).then(res => {
        const data = res.data;
        console.log(data);
        alert("save success!")
        this.router.navigateByUrl("my_pet");
      })
    } else {
      http.put('/pet/' + this.model.id, this.model).then(res => {
        const data = res.data;
        console.log(data);
        alert("edit success!")
        this.router.navigateByUrl("my_pet");
      })
    }
  }
}
