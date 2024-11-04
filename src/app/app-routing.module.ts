import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/auth/guards/auth.guard';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddExpertComponent } from './add-expert/add-expert.component';
import { AllexpertsComponent } from './allexperts/allexperts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReadComponent } from './read/read.component';
import { KnowInteriorDesignerComponent } from './know-interior-designer/know-interior-designer.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { KnowAccountantComponent } from './know-accountant/know-accountant.component';
import { KnowMarketingDesignerComponent } from './know-marketing-designer/know-marketing-designer.component';
import { KnowDentalSurgeryComponent } from './know-dental-surgery/know-dental-surgery.component';
import { KnowChefComponent } from './know-chef/know-chef.component';
import { FeaturesComponent } from './pages/features/features.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailsExpertComponent } from './details-expert/details-expert.component';
const routes: Routes = [
  
  {
    path: '',
     children: [
      { path: 'home', component: HomeComponent },
      {path:'about',component:AboutComponent},
      {path:'services',component:ServicesComponent},
      {path:'contact',component:ContactComponent},
      {path:'loginuser',component:LoginUserComponent},
      {path:'addexpert',component:AddExpertComponent},
      {path:'allexperts',component:AllexpertsComponent},
      {path:'createaccount',component:CreateAccountComponent},
      {path:'invoice',component:InvoiceComponent},
      {path:'read',component:ReadComponent},
      {path:'appointment',component:AppointmentComponent},
      {path:'features',component:FeaturesComponent},
      {path:'testimonial',component:TestimonialComponent},
      {path: 'knowinteriordesigner',component:KnowInteriorDesignerComponent},
      {path:'knowaccountant',component:KnowAccountantComponent},
      {path:'knowmarketingdesigner',component:KnowMarketingDesignerComponent},
      {path:'knowdentalsurgery',component:KnowDentalSurgeryComponent},
      {path:'chef',component:KnowChefComponent},
      {path:'notfoundpage',component:PageNotFoundComponent},
      { path: 'detailsexperts/:id', component: DetailsExpertComponent }, // Définir la route avec paramètre
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      
    ]},

   {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full'},
   
  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [authGuard],
    data: {
      title: 'Home'
    },
    children: [
      { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
      {
        path: 'simple-table',
        loadChildren: () =>
          import('./modules/common/tables/simple-table/simple-table.module').then((m) => m.DataTableModule)
      },
      { path: 'invoice', loadChildren: () => import('./modules/common/pages/invoice/invoice.module').then(m => m.InvoiceModule) },
      { path: 'contacts', loadChildren: () => import('./modules/common/pages/contacts/contacts.module').then(m => m.ContactsModule) },

    ]
  },
  {
    path: 'login',
    // canActivate: [authGuard],
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    // canActivate: [authGuard],
    component: DashboardComponent,
    data: {
      title: 'Login Page'
    }
   },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset Password Page'
    }
  },
  {path: '**', redirectTo: 'notfoundpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
