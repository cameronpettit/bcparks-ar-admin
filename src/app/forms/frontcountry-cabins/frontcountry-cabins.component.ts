import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormService } from 'src/app/services/form.service';
import { BaseFormComponent } from 'src/app/shared/components/forms/base-form/base-form.component';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-frontcountry-cabins',
  templateUrl: './frontcountry-cabins.component.html',
  styleUrls: ['./frontcountry-cabins.component.scss'],
})
export class FrontcountryCabinsComponent extends BaseFormComponent {
  constructor(
    protected formBuilder: FormBuilder,
    protected formService: FormService,
    protected dataService: DataService,
    protected router: Router
  ) {
    super(formBuilder, formService, router, dataService);
    // push existing form data to parent subscriptions
    this.subscriptions.push(
      this.dataService
        .getItemValue(Constants.dataIds.ACCORDION_FRONTCOUNTRY_CABINS)
        .pipe(takeWhile(() => this.alive))
        .subscribe((res) => {
          if (res) {
            this.data = res;
          }
        })
    );

    // declare activity type
    (this.postObj['activity'] = 'Frontcountry Cabins'),
      // initialize the form and populate with values if they exist.
      (this.form = new FormGroup({
        totalAttendancePartiesControl: new FormControl(
          this.data.totalAttendanceParties || null,
          Validators.pattern('^[0-9]*$')
        ),
        revenueGrossCampingControl: new FormControl(
          this.data.revenueGrossCamping || null,
          Validators.pattern('/^-?(0|[1-9]d*)?$/')
        ),
        varianceNotesControl: new FormControl(this.data.notes || null),
      })),
      // link form controls to the object fields they represent
      (this.fields = {
        totalAttendanceParties: this.form.get('totalAttendancePartiesControl'),
        revenueGrossCamping: this.form.get('revenueGrossCampingControl'),
        notes: this.form.get('varianceNotesControl'),
      });
  }

  async onSubmit() {
    await super.submit();
  }
}
