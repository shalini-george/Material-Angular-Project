import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Owner } from 'src/app/_interface/owner.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.less']
})
export class OwnerDetailsComponent implements OnInit {

  public owner: Owner;

  constructor(
    private activeRoute: ActivatedRoute,
    private repo: RepositoryService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getOwnerDetails();
  }

  private getOwnerDetails() {
    let id = this.activeRoute.snapshot.params['id'];

    this.repo.getData(`api/owner/${id}`)
      .subscribe(res => {
        this.owner = res as Owner;
      },
        (error) => {
          this.errorHandler.handleError(error);
        }
      );
  }
}
