import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.css']
})
export class NgInputComponent implements OnInit {
  @Input() className:string
  @Input() text:string
  @Input() vn:string
  @Input() en:string
  constructor() { }

  ngOnInit(): void {
  }

}
