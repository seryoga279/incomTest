import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {BookmarksComponent} from "./bookmarks/bookmarks.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'bookmarks', component: BookmarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
