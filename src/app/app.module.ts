import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav'
import { LucideAngularModule, Home, LogOut } from 'lucide-angular';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdmintableComponent } from './admintable/admintable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsertableComponent } from './usertable/usertable.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSelectModule } from '@angular/material/select';


const routes:Routes = [
  {path:'', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomepageComponent},
  {path:'dashboard', component:AdmindashboardComponent},
  {path:'admintable', component:AdmintableComponent},
  {path:'usertable', component:UsertableComponent},
  {path:'addservice', component:AddserviceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    AdmindashboardComponent,
    AdmintableComponent,
    UsertableComponent,
    AddserviceComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgbNavModule,
    MatTableModule,
    MatSidenavModule,
    LucideAngularModule.pick({ Home, LogOut}),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
