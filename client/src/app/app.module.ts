import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPageComponent } from './my-page/my-page.component';
import { MyPetComponent } from './my-pet/my-pet.component';
import { AboutComponent } from './about/about.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    MyPetComponent,
    AboutComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
