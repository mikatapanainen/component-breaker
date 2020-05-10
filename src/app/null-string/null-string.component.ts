import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-null-string',
  templateUrl: './null-string.component.html',
  styleUrls: ['./null-string.component.scss']
})
export class NullStringComponent implements OnInit {

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
