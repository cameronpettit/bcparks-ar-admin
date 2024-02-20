import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarianceSearchComponent } from './variance-search.component';
import { VarianceFiltersComponent } from './variance-filters/variance-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VarianceListComponent } from './variance-list/variance-list.component';
import { VarianceAccordionComponent } from './variance-list/variance-accordion/variance-accordion.component';
import { NgdsFormsModule } from '@digitalspace/ngds-forms'

@NgModule({
  declarations: [
    VarianceSearchComponent,
    VarianceFiltersComponent,
    VarianceListComponent,
    VarianceAccordionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgdsFormsModule
  ],
  exports: [
    VarianceSearchComponent
  ]
})
export class VarianceSearchModule { }
