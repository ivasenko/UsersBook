import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

const AppRouting: Routes = [
  {path: "", redirectTo: '/user-list', pathMatch: 'full'},
  {path: "user", component: "UserComponent"},
  {path: "new-user", component: "NewUserComponent"},
  {path: "users-list", component: "UsersListComponent"}
]

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NewUserComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
