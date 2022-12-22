import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './components/list-game/list-game.component';
import { ListPostComponent } from "./components/list-post/list-post.component";
import { HomeComponent } from './pages/home/home.component';
import { TroChoiDetailComponent } from './pages/tro-choi-detail/tro-choi-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-game', component: ListGameComponent },
  { path: 'list-post', component: ListPostComponent },
  { path: 'game-detail', component: TroChoiDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
