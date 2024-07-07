import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'dashboard'},
    {
        path:'dashboard',
        // loadComponent:() => import('./pages/decorators/container/container.component').then((m) => m.ContainerComponent),
        // loadComponent:() => import('./pages/decorators/elements/elements.component').then((m) => m.ElementsComponent)
        loadComponent:() => import('./pages/Directives/sample/sample.component').then((m) => m.SampleComponent)
    }
];
