import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
 {path: 'signup',
component:SignupComponent},
  {
    path: '',
    component: HomeComponent
    },
    {
      path: 'blog',
      component: BlogHomeComponent,
      canActivate:[AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    
  ,
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
    }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
