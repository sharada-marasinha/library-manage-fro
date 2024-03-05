import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';
import { BorrowBookComponent } from './page/borrow-book/borrow-book.component';
import { LayoutCompornentComponent } from './page/layout-compornent/layout-compornent.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"view-all-books",
        component:ViewAllBooksComponent,
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"view-all-borrows",
        component:ViewAllUsersComponent
    },
    {
      path:"borrow-book",
      component:BorrowBookComponent
    },
    {
      path:"home",
      component:DashbordComponent
    },
    {
      path:"**",
      component:LoginComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },

];
