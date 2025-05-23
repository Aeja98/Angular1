import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'converter', component: ConverterComponent },
    { path: 'about', component: AboutComponent },
];
