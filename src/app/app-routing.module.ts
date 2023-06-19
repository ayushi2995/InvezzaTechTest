import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'mainpage', 
    component: MainpageComponent, 
    canActivate: [AuthGuardService]
  },
  {
    path: 'characterdetail', 
    component: CharacterdetailComponent, 

  },
  {
    path: '**', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
