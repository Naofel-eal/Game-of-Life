import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @ViewChild('map') input!: ElementRef;
}
