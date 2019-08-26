import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Owner } from 'src/app/_interface/owner.model';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.less']
})
export class OwnerListComponent implements OnInit, AfterViewInit {
  
  public dataSource = new MatTableDataSource<Owner>();
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator : MatPaginator;

  constructor(private repo: RepositoryService,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public getAllOwners = () => {
    this.repo.getData('api/owner')
      .subscribe(res => {
        this.dataSource.data = res as Owner[];
      }),
      (error) => {
        this.errorHandler.handleError(error);
      }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
   this.router.navigate([`/owner/details/${id}`]);
  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }


}
