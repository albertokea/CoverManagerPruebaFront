import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
import { Zone } from 'src/app/interfaces/zone';
import panzoom from "panzoom";

@Component({
  selector: 'zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  @Input() currentZone: Zone;
  @ViewChild('map') map: ElementRef;

  zones: Zone[];
  tables: Table[];
  filteredTables: Table[];

  constructor() {
    this.tables = [
      {
        id_table: 1,
        name_table: "Mesa1",
        id_zone: 370,
        x: 31,
        y: 30
      },
      {
        id_table: 2,
        name_table: "Mesa2",
        id_zone: 370,
        x: 133,
        y: 32
      },
      {
        id_table: 3,
        name_table: "Mesa3",
        max: 2,
        min: 1,
        id_zone: 370,
        x: 88,
        y: 105
      },
      {
        id_table: 4,
        name_table: "Mesa4",
        id_zone: 370,
        x: 203,
        y: 107
      },
      {
        id_table: 5,
        name_table: "Mesa5",
        id_zone: 371,
        x: 63,
        y: 38
      },
      {
        id_table: 6,
        name_table: "Mesa6",
        id_zone: 371,
        x: 63,
        y: 109
      },
      {
        id_table: 7,
        name_table: "Mesa7",
        id_zone: 372,
        x: 32,
        y: 93
      },
      {
        id_table: 8,
        name_table: "Mesa8",
        id_zone: 372,
        x: 111,
        y: 95
      }
    ];
  }

  ngOnInit() {
    this.filterByZoneId();
  }

  ngAfterViewInit() {
    panzoom(this.map.nativeElement, {
      maxZoom: 3,
      minZoom: 1,
      transformOrigin: { x: 0.2, y: 0.2 },
      filterKey: function () {
        // Ignore keyboard events:
        return true;
      }
    });
  }

  ngOnChanges() {
    this.filterByZoneId();
  }

  filterByZoneId() {
    this.filteredTables = this.tables.filter(table => table.id_zone === this.currentZone.id_zone);
  }

}
