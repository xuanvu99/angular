import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng',
  templateUrl: './test-ng.component.html',
  styleUrls: ['./test-ng.component.css']
})
export class TestNgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  box
  boolen = true
  a = {color: 'yellow', fontSize: '30px'}
  b = {color: 'pink', fontSize: '40px'}
  changeColor = { a: this.boolen, b: !this.boolen }

}
