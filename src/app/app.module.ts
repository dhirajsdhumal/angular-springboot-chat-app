import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { MessageListComponent } from './components/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
