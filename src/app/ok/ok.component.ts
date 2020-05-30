import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.scss']
})
export class OkComponent implements OnInit {

  constructor() { }

  testString: string;
  testLength: number;

  ngOnInit(): void {
    this.testString = 'aaa';
  }

  doThing() {
    this.testLength = this.testString.length;
  }
}
