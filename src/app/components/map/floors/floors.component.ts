import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Floor } from 'src/app/interfaces/floor';
import { Zone } from 'src/app/interfaces/zone';

@Component({
  selector: 'floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  floors: Floor[];
  filteredFloor: Floor;
  currentFloor: number;
  zones: Zone[];
  currentZone: Zone;


  constructor() {
    this.floors = [
      {
        id_floor: 201,
        name: "Planta 1"
      },
      {
        id_floor: 202,
        name: "Planta 2"
      },
      {
        id_floor: 203,
        name: "Planta 3"
      }
    ];
    this.currentFloor = 201;

    this.zones = [
      {
        id_zone: 370,
        name: "Z1",
        floor: 201
      },
      {
        id_zone: 371,
        name: "Z2",
        floor: 202
      },
      {
        id_zone: 372,
        name: "Z3",
        floor: 203
      }
    ];
    this.currentZone = this.zones[0];
  }

  ngOnInit(): void {
  }

  nextFloor() {
    this.currentFloor != 203 ? this.filterByFloorId(this.currentFloor + 1) : this.filterByFloorId(201);
  }

  filterByFloorId(id) {
    this.currentFloor = id;
    this.filteredFloor = this.floors.filter(floor => floor.id_floor === id)[0];
    this.currentZone = this.zones.filter(zone => zone.floor === this.currentFloor)[0];
  }

}
