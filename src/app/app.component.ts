import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; // 메뉴 
import {MatButtonModule} from '@angular/material/button'; // 메뉴버튼

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
}) */

export class AppComponent {
  title = 'assignment1';
}


// 301238132 JongMin Lee