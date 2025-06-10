import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'httpcache', loadComponent: () => import('./http-cache/http-cache.component').then(m => m.HttpCacheComponent) },
  { path: 'products/:id', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
