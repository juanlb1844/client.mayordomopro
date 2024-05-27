import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { MainComponent } from './layouts/main/main.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { OnboardComponent } from '@components/blank/onboard/onboard.component';

const routes: Routes = [
  {
    path: 'blank',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/blank/blank.module').then((m) => m.BlankModule),
      },
    ],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/main/main.module').then((m) => m.MainModule),
      },
    ],
  },
  {
    path: '**',
    component: OnboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
