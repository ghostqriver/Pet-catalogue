import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { MyPageComponent } from './my-page/my-page.component';
import { MyPetComponent } from './my-pet/my-pet.component';

const routes: Routes = [
  {
    path: "my_page",
    component: MyPageComponent
  },
  {
    path: "my_pet",
    component: MyPetComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "edit_pet",
    component: EditPetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
