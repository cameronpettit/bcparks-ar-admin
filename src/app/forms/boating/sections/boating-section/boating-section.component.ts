import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-boating-section',
  templateUrl: './boating-section.component.html',
  styleUrls: ['./boating-section.component.scss'],
})
export class BoatingSectionComponent implements OnInit {
  @Input() nightsOnDock = new FormControl;
  @Input() nightsOnBuoy = new FormControl;
  @Input() miscellaneousBoats = new FormControl;
  @Input() grossBoatingRevenue = new FormControl;

  constructor() {}

  ngOnInit(): void {}
}
