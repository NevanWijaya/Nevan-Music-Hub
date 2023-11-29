import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages = [
    {name: "Personal Recommendation", link: ""},
    {name: "Display", link: "display"},
    {name: "Music Form", link: "music-form"},
  ]
}
