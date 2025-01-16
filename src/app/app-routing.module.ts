import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { SevasComponent } from './sevas/sevas.component';
=======
>>>>>>> origin/master

const routes: Routes = [
  {path:"usertable",component:TableComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
<<<<<<< HEAD
  {path:"sevas",component:SevasComponent},
=======
>>>>>>> origin/master
  { path: "", redirectTo: "home", pathMatch: "full" } // Corrected this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD


=======
>>>>>>> origin/master
