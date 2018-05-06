import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { OffenderComponent } from './offender/offender.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: 'user', component: UserComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: '', component: OffenderComponent, canActivate: [AuthGuard]  },
    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }