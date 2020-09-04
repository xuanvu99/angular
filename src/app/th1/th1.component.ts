import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1',
  templateUrl: './th1.component.html',
  styleUrls: ['./th1.component.css']
})
export class TH1Component implements OnInit {
  x: number;
  n: number;
  s = 0;

  x2: number;
  n2: number;
  s2 = 0;

  arr = [
    { hoten: 'Nguyen Thi Mai', diemthi: 9 },
    { hoten: 'Tran Thi Anh', diemthi: 7.5 },
    { hoten: 'Hoang Thi Dung', diemthi: 8.3 }
  ]

  arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  arrResult = [];

  constructor() { }

  ngOnInit(): void {
    this.arrResult = this.arrNum.filter(x => {
      let sq = Math.sqrt(x);
      return ((sq - Math.floor(sq)) == 0);
    });
  }

  bai1() {
    this.s = 0;
    let lt = 1;
    for (let i = 1; i <= this.n; i++) {
      lt *= this.x;
      this.s += lt;
    }
  }

  bai2() {
    this.s2 = 0;
    let s = 1;
    for (let i = 1; i <= this.n2; i++) {
      s += s * i;
      this.s2 = Math.pow(-1, i) * (Math.pow(this.x2, this.n2) / s);
    }
  }

}
