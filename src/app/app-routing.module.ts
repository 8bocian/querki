import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserThreadsComponent } from './pages/user-threads/user-threads.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'user-threads', component: UserThreadsComponent },
  // { path: 'users-questions', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
