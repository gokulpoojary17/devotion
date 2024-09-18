import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"usertable",component:TableComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  { path: "", redirectTo: "home", pathMatch: "full" } // Corrected this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
