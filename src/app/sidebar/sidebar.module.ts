import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from './sidebar.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { AddEmployeeComponent } from '../components/employee/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    SidebarComponent,EmployeeComponent,AddEmployeeComponent, PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule,
    FormsModule



    
  ]
})
export class SidebarModule { }
