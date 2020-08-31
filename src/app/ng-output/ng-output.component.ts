import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-output',
  templateUrl: './ng-output.component.html',
  styleUrls: ['./ng-output.component.css']
})
export class NgOutputComponent implements OnInit {

  // @Output() myClick = new EventEmitter();
  //
  // a:number
  constructor() { }

  ngOnInit(): void {
  }
  //
  // them() {
  //   let c = {
  //       a: this.a,
  //       bool: true
  //     }
  //   // @ts-ignore
  //   this.myClick.emit(c)
  //   this.a = 0
  // }
  //
  // bot() {
  //   let c = {
  //   a: this.a,
  //   bool: false
  // }
  //   // @ts-ignore
  //   this.myClick.emit(c)
  //   this.a = 0
  // }

  arrName = [{
    ten: 'ti',
    tuoi: 10
  },{
    ten: 'teo',
    tuoi: 15
  },{
    ten: 'tun',
    tuoi: 7
  }]

  removeName(ten:string) {
    const name = this.arrName.findIndex(e => e.ten == ten)
    this.arrName.splice(name, 1)
  }
}
