import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mika',
  templateUrl: './mika.component.html',
  styleUrls: ['./mika.component.scss']
})
export class MikaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testString: string;
  result: string;

  doThing(): void {
    this.testString.startsWith("cat");
  }
}
