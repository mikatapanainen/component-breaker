import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test22',
  templateUrl: './test22.component.html',
  styleUrls: ['./test22.component.scss']
})
export class Test22Component implements OnInit {

  constructor() { }

  testString: string;

  ngOnInit(): void {
  }

  doThing1(): void {
  }

  doThing2(): void {
    this.testString.startsWith("cat");
  }
}
