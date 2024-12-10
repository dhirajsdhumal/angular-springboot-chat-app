import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { MessageListComponent } from './components/message-list/message-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: SignInComponent },
  { path: 'messages', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
