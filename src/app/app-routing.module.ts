import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalRecComponent } from './personal-rec/personal-rec.component';
import { DisplayComponent } from './display/display.component';
import { MusicFormComponent } from './music-form/music-form.component';

const routes: Routes = [
  {path: "", component: PersonalRecComponent},
  {path: "display", component: DisplayComponent},
  {path: "music-form", component: MusicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
