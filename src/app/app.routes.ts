import { Routes } from '@angular/router';
import { Ptb1 } from './ptb1/ptb1';
import { Learnbinding } from './learnbinding/learnbinding';
import { Listcustomer } from './listcustomer/listcustomer';
import { Ex14catelog } from './exercise14/exercise14';
import { Ex18 } from './exercise18/exercise18';
import { Ex13 } from './exercise13/exercise13'; 
import { Product } from './exercise19/product/product';
import { ListProduct } from './exercise19/list-product/list-product';
import { ServiceProduct } from './exercise19/service-product/service-product';
import { PaymentComponent } from './momo_payment/payment.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';

export const routes: Routes = [
  { path: 'ptb1', component: Ptb1 },
  { path: 'learnbinding', component: Learnbinding },
  { path: 'listcustomer', component: Listcustomer },
  { path: 'Exercise14', component: Ex14catelog },
  { path: 'Exercise18', component: Ex18 },
  { path: 'Exercise13', component: Ex13 },
  { path: 'Product', component: Product },
  { path: 'ListProduct', component: ListProduct },
  { path: 'ServiceProduct', component: ServiceProduct },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-result', component: PaymentResultComponent },
  { path: '', redirectTo: '/Exercise14', pathMatch: 'full' }
];

