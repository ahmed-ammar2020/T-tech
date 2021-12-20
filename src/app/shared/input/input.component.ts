import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() inputType: string = 'text';
  @Input() control: any;
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { errors, dirty, touched } = this.control;
    return errors && dirty && touched;
  }
}
