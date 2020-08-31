import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(ChildComponent) child: ChildComponent;

  them() {
    this.child.value++;
  }

  bot() {
    this.child.value--;
  }

}
