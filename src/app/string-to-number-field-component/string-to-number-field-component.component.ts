import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-to-number-field-component',
  templateUrl: './string-to-number-field-component.component.html',
  styleUrls: ['./string-to-number-field-component.component.scss']
})
export class StringToNumberFieldComponentComponent implements OnInit {
  constructor() { }

  age: number;

  ngOnInit(): void {
  }
}
