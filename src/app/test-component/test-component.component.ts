import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  active = false;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('test-component-id')?.setAttribute('src', 'value');
  }

}
