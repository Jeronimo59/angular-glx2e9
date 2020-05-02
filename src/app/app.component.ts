import { Component, OnInit } from '@angular/core';
import * as cheerio from 'cheerio';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  xml = 'Angular';
  ngOnInit() {
    console.log(cheerio);
    this.xml = cheerio.load('<h2 class="title">Hello world</h2>').xml();
  }
}
