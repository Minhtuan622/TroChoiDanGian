import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { ListInfoComponent } from './components/list-info/list-info.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ItemTroChoiComponent } from './components/tro-choi-item/item-tro-choi.component';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from './app.component';
import { ListPostComponent } from './components/list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPostComponent,
    ContentComponent,
    FooterComponent,
    ListGameComponent,
    CardComponent,
    ListInfoComponent,
    NewPostComponent,
    ItemTroChoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
