import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, 
  MatIconModule, MatButtonModule, MatListModule,
MatMenuModule, MatTableModule, MatSortModule, MatInputModule,
MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
MatCheckboxModule, MatCardModule, MatSelectModule, MatExpansionModule,
MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatTabsModule, MatSidenavModule,
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatListModule, MatMenuModule, MatTableModule,
    MatSortModule, MatInputModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatCheckboxModule,
    MatCardModule, MatSelectModule, MatExpansionModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatTabsModule, MatSidenavModule, MatToolbarModule,
    MatIconModule, MatButtonModule, MatListModule,
    MatMenuModule, MatTableModule, MatSortModule,
    MatInputModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatCheckboxModule, MatCardModule, 
    MatSelectModule, MatExpansionModule, MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
