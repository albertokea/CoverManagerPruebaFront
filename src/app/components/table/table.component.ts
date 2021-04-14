import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'src/app/interfaces/table';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() table: Table;
  isDisabled: boolean;

  constructor() {
    this.isDisabled = true;
  }

  ngOnInit(): void {
  }

  showPopover() {
    this.isDisabled = !this.isDisabled;
  }
}
