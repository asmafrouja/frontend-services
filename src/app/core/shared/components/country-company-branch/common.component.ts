import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  @Input() excludeBranchDropdown: boolean = false;
  @Input() multipleBranches: any = false;
  @Input() editFlag: boolean = false;
  @Input() countryList: any = [];
  @Input() errors: any = [];
  @Input() formError: any = {};
  companyList: any = [];
  branchList: any = [];
  readonly filteredCountries$ = new BehaviorSubject<any[]>([]);
  readonly searchValueForCountry$ = new Subject<string>();
  readonly filteredCompanies$ = new BehaviorSubject<any[]>([]);
  readonly searchValueForCompany$ = new Subject<string>();
  readonly filteredBranches$ = new BehaviorSubject<any[]>([]);
  readonly searchValueForBranch$ = new Subject<string>();
  userInfo: any;
  formGroup: FormGroup;  // Correctly typed formGroup

  constructor(
    private rootFormGroup: FormGroupDirective,
    private roleService: RolesService,
    private viewContainer: ViewContainerRef) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  }

  ngOnInit(): void {
    if (this.multipleBranches) {
      this.multipleBranches = 'checkbox';
    } else {
      this.multipleBranches = 'text';
    }
    this.formGroup = this.rootFormGroup.control;
    this.formGroup.get('companyId').disable();
    if (!this.excludeBranchDropdown) {
      this.formGroup.get('branchId').disable();
    }

    if (this.countryList.length > 0) {
      this.setMultiSelectOptions('country');
      if (this.editFlag) {
        this.formGroup.controls['countryId'].setValue([this.formGroup.value.countryId]);
      }
    }
  }

  setMultiSelectOptions(searched: any) {
    if (searched == 'country') {
      let countries = JSON.parse(JSON.stringify(this.countryList));
      let countryOptions: any = [];
      countries.forEach((item: any) => {
        let obj: any = {};
        obj['value'] = item.id;
        obj['label'] = item.countryName;
        countryOptions.push(obj);
      });
      this.filteredCountries$.next([...countryOptions]);
      this.searchValueForCountry$.subscribe((next) => {
        const filtered = countryOptions.filter((option) =>
          option.label.toLowerCase().startsWith(next.trimStart().toLowerCase()),
        );
        this.filteredCountries$.next([...filtered]);
      });
    } else if (searched == 'company' && this.companyList) {
      let companies = JSON.parse(JSON.stringify(this.companyList));
      let companyOptions: any = [];
      companies.forEach((item: any) => {
        let obj: any = {};
        obj['value'] = item.id;
        obj['label'] = item.companyName;
        companyOptions.push(obj);
      });
      this.filteredCompanies$.next([...companyOptions]);
      this.searchValueForCompany$.subscribe((next) => {
        const filtered = companyOptions.filter((option) =>
          option.label.toLowerCase().startsWith(next.trimStart().toLowerCase()),
        );
        this.filteredCompanies$.next([...filtered]);
      });
    } else if (searched == 'branch' && this.branchList) {
      let branches = JSON.parse(JSON.stringify(this.branchList));
      let branchOptions: any = [];
      branches.forEach((item: any) => {
        let obj: any = {};
        obj['value'] = item.id;
        obj['label'] = item.branchName;
        branchOptions.push(obj);
      });
      this.filteredBranches$.next([...branchOptions]);
      this.searchValueForBranch$.subscribe((next) => {
        const filtered = branchOptions.filter((option) =>
          option.label.toLowerCase().startsWith(next.trimStart().toLowerCase()),
        );
        this.filteredBranches$.next([...filtered]);
      });
    }
  }
}
