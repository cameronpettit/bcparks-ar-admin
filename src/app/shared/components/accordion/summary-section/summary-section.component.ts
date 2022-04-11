import { Component, Input, OnInit } from '@angular/core';

export interface summaryLineItem {
  itemName: string,
  value?: number
}

export interface summarySection {
  title?: string,
  attendanceLabel?: string,
  attendanceItems?: Array<summaryLineItem>,
  revenueLabel?: string,
  revenueItems?: Array<summaryLineItem>
}

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss']
})


export class SummarySectionComponent implements OnInit {
  @Input() section: summarySection = {};
  
  constructor() { }
  
  ngOnInit(): void {
    if (!this.section.attendanceLabel){
      this.section.attendanceLabel = "Attendance";
    }
    if (!this.section.revenueLabel){
      this.section.revenueLabel = "Revenue";
    }
  }
  
  calcAttendance(){
    let sum = 0;
    if(this.section.attendanceItems){
      for (let item of this.section.attendanceItems){
        if (item.value){
          sum += item.value;
        }
      }
    }
    return sum;
  }

  calcRevenue(){
    let sum = 0;
    if(this.section.revenueItems){
      for (let item of this.section.revenueItems){
        if (item.value) {
          sum += item.value * 100;
        }
      }
    }
    // TODO: properly account for rounding errors.
    return sum/100;
  }

}
