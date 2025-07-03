import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CareerComponent } from './pages/career/career.component'; 
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { DietComponent } from './pages/service/diet/diet.component';
import { NephropathyComponent } from './pages/service/nephropathy/nephropathy.component';
import { RetinopathyComponent } from './pages/service/retinopathy/retinopathy.component';
import { ThyroidComponent } from './pages/service/thyroid/thyroid.component';
import { TypeDiabetesComponent } from './pages/service/type-diabetes/type-diabetes.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'career', component: CareerComponent },
    { path: 'job-apply', component: JobApplyComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'terms' , component: TermsComponent },
    { path: 'privacy-policy' , component: PrivacyPolicyComponent},
    {path: 'reference', component: ReferenceComponent},
    {path: 'diet', component: DietComponent},
    {path: 'nephropathy', component: NephropathyComponent},
    {path: 'retinopathy', component: RetinopathyComponent},
    {path: 'thyroid', component: ThyroidComponent},
    {path: 'type-diabetes', component: TypeDiabetesComponent},
    {path: 'appointment', component: AppointmentComponent},
];
