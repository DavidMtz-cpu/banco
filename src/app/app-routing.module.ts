import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then( m =>m.LoginModule ) 
  },
  {
    path:'',
    loadChildren: () => import('../app/pages/menu.module').then( m =>m.MenuModule ) 
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }