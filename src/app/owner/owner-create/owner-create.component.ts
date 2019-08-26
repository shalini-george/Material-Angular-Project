import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { OwnerForCreation } from 'src/app/_interface/ownerForCreation.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.less']
})
export class OwnerCreateComponent implements OnInit {

  public ownerForm: FormGroup
  constructor(private location: Location,
    private repo: RepositoryService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError[errorName];
  }

  public onCancel() {
    return this.location.back();
  }

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation(ownerFormValue) {
    let owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address
    }

    this.repo.create('api/owner', owner)
      .subscribe(
        res => {
          this.location.back();
        },
        error => {
          this.location.back();
        }
      )
  }

}
