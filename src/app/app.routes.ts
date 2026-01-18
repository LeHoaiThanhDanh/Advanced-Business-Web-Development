import { Routes } from '@angular/router';
import { Ptb1 } from './ptb1/ptb1';
import { Learnbinding } from './learnbinding/learnbinding';
import { Listcustomer } from './listcustomer/listcustomer';
import { Ex14catelog } from './exercise14/exercise14';

export const routes: Routes = [
  { path: 'ptb1', component: Ptb1 },
  { path: 'learnbinding', component: Learnbinding },
  { path: 'listcustomer', component: Listcustomer },
  { path: 'Exercise14', component: Ex14catelog },
  { path: '', redirectTo: '/ptb1', pathMatch: 'full' }
];
