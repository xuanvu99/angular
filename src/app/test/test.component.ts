import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "Phương trình bậc 2"
  a:number
  b:number
  c:number
  delta:number
  x1:number
  x2:number

  ngOnInit(): void {
  }

  tinh() {
    this.delta = this.b * this.b - 4 * this.a * this.c
    if (this.delta > 0) {
      alert("Phương trình có 2 nghiệm phân biệt")
      this.x1 = -this.b + Math.sqrt(this.delta) / 2 * this.a
      this.x2 = -this.b - Math.sqrt(this.delta) / 2 * this.a
    }
    if (this.delta == 0) {
      alert("Phương trình có 1 nghiệm kép")
      this.x1 = this.x2 = -this.b / 2 * this.a
    }
    if (this.delta < 0) {
      alert("Phương trình vô nghiệm")
    }
  }

}

