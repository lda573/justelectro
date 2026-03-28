import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'media-items', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./domains/auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: 'media-items',
    canActivate: [authGuard],
    loadChildren: () => import('./domains/media-items/media-items.routes').then(m => m.mediaItemsRoutes),
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    loadChildren: () => import('./domains/orders/orders.routes').then(m => m.ordersRoutes),
  },
  { path: '**', redirectTo: 'media-items' },
];
