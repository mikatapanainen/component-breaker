import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testString: string;

  doThing1(): void {
  }

  doThing2(): void {
    this.testString.startsWith("cat");
  }
}
