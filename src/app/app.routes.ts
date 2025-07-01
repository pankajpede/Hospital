import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { MeettheteamComponent } from './pages/meettheteam/meettheteam.component'; 
import { OurjourneyComponent } from './pages/ourjourney/ourjourney.component'; 
import { CareerComponent } from './pages/career/career.component'; 
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SuccessStoriesComponent } from './pages/success-stories/success-stories.component';
import { JobApplyComponent } from './pages/job-apply/job-apply.component';
import { ReferenceComponent } from './pages/reference/reference.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'team', component: MeettheteamComponent },
    { path: 'our-journey', component: OurjourneyComponent },
    { path: 'career', component: CareerComponent },
    { path: 'job-apply', component: JobApplyComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'terms' , component: TermsComponent },
    { path: 'privacy-policy' , component: PrivacyPolicyComponent},
    { path: 'success-stories' , component: SuccessStoriesComponent },
    {path: 'reference', component: ReferenceComponent},
];
