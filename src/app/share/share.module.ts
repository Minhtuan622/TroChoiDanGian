import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterLinkWithHref} from "@angular/router";
import { NewPostComponent } from './components/new-post/new-post.component';
import { ItemTroChoiComponent } from './components/tro-choi-item/item-tro-choi.component';
import { TroChoiDetailComponent } from './components/tro-choi-detail/tro-choi-detail.component';
import { ListInfoComponent } from './components/list-info/list-info.component';



@NgModule({
  declarations: [
    CardComponent,
    NewPostComponent,
    ItemTroChoiComponent,
    TroChoiDetailComponent,
    ListInfoComponent
  ],
    exports: [
        CardComponent,
        NewPostComponent,
        ItemTroChoiComponent,
        ListInfoComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLinkWithHref
  ]
})
export class ShareModule { }
