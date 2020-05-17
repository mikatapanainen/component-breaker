import { Component, OnInit } from '@angular/core';
import { isNumber } from '../utils/component-utils';

@Component({
  selector: 'app-array-item-not-found',
  templateUrl: './array-item-not-found.component.html',
  styleUrls: ['./array-item-not-found.component.scss']
})
export class ArrayItemNotFoundComponent implements OnInit {

  constructor() { }

  index: string;

  ngOnInit(): void {
  }

  modelChanged(newObj: any) {
    if (!isNumber(this.index)) {
      return;
    }

    ['aa', 'bb'][this.index].length;
  }
}
