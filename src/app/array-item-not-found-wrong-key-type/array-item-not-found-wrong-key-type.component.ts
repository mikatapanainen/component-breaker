import { Component, OnInit } from '@angular/core';
import { isNumber } from '../utils/component-utils';

@Component({
  selector: 'app-array-item-not-found-wrong-key-type',
  templateUrl: './array-item-not-found-wrong-key-type.component.html',
  styleUrls: ['./array-item-not-found-wrong-key-type.component.scss']
})
export class ArrayItemNotFoundWrongKeyTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  index: string;

  modelChanged(newObj: any) {
    if (isNumber(this.index)) {
      return;
    }

    ['aa', 'bb'][this.index].length;
  }
}
