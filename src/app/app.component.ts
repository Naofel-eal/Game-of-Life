import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, ControlPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Game of Life';
}
