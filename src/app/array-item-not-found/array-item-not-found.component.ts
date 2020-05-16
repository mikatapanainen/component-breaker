import { Component, OnInit } from '@angular/core';

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
    if (!this.isNumber(this.index)) {
      return;
    }

    ['aa', 'bb'][this.index].length;
  }

  isNumber(stringToCheck: any) { 
    return !isNaN(parseFloat(stringToCheck)) && !isNaN(stringToCheck - 0) 
  }
}
