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
  ds = [{ hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi: 9 }, { hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi: 7.5 }, { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi: 8.3 }];
  dshs = []
  list = [{ hoten: 'Nguyen Thi Mai', diemthi: 9 }, { hoten: 'Tran Thi Anh', diemthi: 7.5 }, { hoten: 'Hoang Thi Dung', diemthi: 8.3 }];
  ls = []
  arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  S = 0;

  A: number;
  B: number;
  C: number;
  X1: number;
  X2: number;
  X3: number;
  X4: number;
  ALERT: string;
  constructor() { }

  ngOnInit(): void {
    this.arrResult = this.arrNum.filter(x => {
      let sq = Math.sqrt(x);
      return ((sq - Math.floor(sq)) == 0);
    });

    this.dshs = this.ds.filter(sv => {
      return sv.diemthi > 8 && sv.quequan == "Hai Phong";
    })

    this.ls = this.list.sort((a, b) => {
      let name1 = a.hoten;
      let name2 = b.hoten;

      name1 = name1.substring(name1.lastIndexOf(" "), name1.length) + name1.substring(0, name1.lastIndexOf(" "));
      name2 = name2.substring(name2.lastIndexOf(" "), name2.length) + name2.substring(0, name2.lastIndexOf(" "));

      if (name1 > name2) return 1;
      if (name1 < name2) return -1;
      return 0;
    })

    this.arrN.map(x => {
      this.S += x > 0 ? x : 0;
    });


  }

  tinh() {
    let pt = new PhuongTrinh(this.A, this.B, this.C);
    let giai = pt.giai();

    if (giai == 0) {
      this.ALERT = "Phương trình vô nghiệm";
    } else if (giai == 1) {
      if (pt.X1 < 0) {
        this.ALERT = "Phương trình vô nghiệm";
      } else if (pt.X1 == 0) {
        this.ALERT = "Phương trình có 1 nghiệm";
        this.X1 = 0;
      } else {
        this.ALERT = "Phương trình có 2 nghiệm";
        this.X1 = Math.sqrt(pt.X1);
        this.X2 = -Math.sqrt(pt.X1);
      }
    } else {
      if (pt.X1 < 0) {
        if (pt.X2 < 0) {
          this.ALERT = "Phương trình vô nghiệm";
        } else if (pt.X1 == 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.X1 = 0;
        } else {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
        }
      } else if (pt.X1 == 0) {
        if (pt.X2 < 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.X1 = 0;
        } else {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.X1 = Math.sqrt(pt.X2);
          this.X2 = -Math.sqrt(pt.X2);
          this.X3 = 0;
        }
      } else {
        if (pt.X2 < 0) {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
        } else if (pt.X2 == 0) {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = 0;
        } else {
          this.ALERT = "Phương trình có 4 nghiệm";
          this.X1 = Math.sqrt(pt.X1);
          this.X2 = -Math.sqrt(pt.X1);
          this.X3 = Math.sqrt(pt.X2);
          this.X4 = -Math.sqrt(pt.X2);
        }
      }
    }
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

export class PhuongTrinh {
  A: number;
  B: number;
  C: number;
  X1: number;
  X2: number;

  constructor(A: number, B: number, C: number) {
    this.A = A;
    this.B = B;
    this.C = C;
  }

  giai() {
    let delta = this.B * this.B - 4 * this.A * this.C;
    if (delta < 0) {
      this.X1 = this.X2 = 0.0;
      return 0;
    }
    else if (delta == 0) {
      this.X1 = this.X2 = -this.B / (2 * this.A);
      return 1;
    }
    else {
      delta = Math.sqrt(delta);
      this.X1 = (-this.B + delta) / (2 * this.A);
      this.X2 = (-this.B - delta) / (2 * this.A);
      return 2;
    }
  }
}