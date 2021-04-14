import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloorsComponent } from './components/map/floors/floors.component';
import { TablesComponent } from './components/tables/tables.component';
import { ZonesComponent } from './components/map/zones/zones.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorsComponent,
    TablesComponent,
    ZonesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
