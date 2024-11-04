import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './core/default-layout/default-layout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { SharedAppModule } from './core/shared/shared.module';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { FeatureGuard } from './core/permission/guards/feature.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/shared/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddExpertComponent } from './add-expert/add-expert.component';
import { AllexpertsComponent } from './allexperts/allexperts.component';
import { ReadModule } from './read/read.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { KnowInteriorDesignerComponent } from './know-interior-designer/know-interior-designer.component';
import { KnowAccountantComponent } from './know-accountant/know-accountant.component';
import { KnowMarketingDesignerComponent } from './know-marketing-designer/know-marketing-designer.component';
import { KnowDentalSurgeryComponent } from './know-dental-surgery/know-dental-surgery.component';
import { KnowChefComponent } from './know-chef/know-chef.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { DetailsExpertComponent } from './details-expert/details-expert.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    HomeComponent,
    TopBarComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    PagesComponent,
    FeaturesComponent,
    AppointmentComponent,
    TestimonialComponent,
    ContactComponent,
    LoginUserComponent,
    AddExpertComponent,
    AllexpertsComponent,
    CreateAccountComponent,
    InvoiceComponent,
    KnowInteriorDesignerComponent,
    KnowAccountantComponent,
    KnowMarketingDesignerComponent,
    KnowDentalSurgeryComponent,
    KnowChefComponent,
    PageNotFoundComponent,
    DetailsExpertComponent,    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultLayoutModule,
    DashboardModule,
    SharedAppModule,
    BrowserAnimationsModule,
    NgbModule,
    ReadModule,
   RouterModule,
   ReactiveFormsModule ,
   CarouselModule,
   
  ],
  providers: [
    FeatureGuard,
    DatePipe,
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
