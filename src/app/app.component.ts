import { Component } from '@angular/core';
interface sidenavlist {
  key: string,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;
  headings: sidenavlist[] = [
    {key: 'home', name: "Trang chủ"},
    {key: 'list-game', name: "Danh sách trò chơi"},
    {key: 'list-post', name: "Danh sách bài viết"}
  ];

}
