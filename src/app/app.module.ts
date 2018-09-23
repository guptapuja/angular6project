import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { myService } from './myservice.service';
import {RouterModule} from  '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch:'full',redirectTo:'users'},
     
      { path: 'users', component: LoginComponent },
      { path: 'userdetail/:id', component: UserdetailsComponent },
    ])
  ],
  providers: [myService],
  bootstrap: [AppComponent]
})
export class AppModule { }
