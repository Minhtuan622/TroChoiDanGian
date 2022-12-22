import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/components/home/home.component";
import {ListGameComponent} from "./public/components/list-game/list-game.component";
import {ListPostComponent} from "./public/components/list-post/list-post.component";
import {TroChoiDetailComponent} from "./share/components/tro-choi-detail/tro-choi-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list-game', component: ListGameComponent},
  {path: 'list-post', component: ListPostComponent},
  {path: 'game-detail', component: TroChoiDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
