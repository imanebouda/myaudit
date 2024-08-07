import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)



  },
  
    
  {
    path: 'audit',
    loadChildren: () => import('./page/audit/audit.module').then( m => m.AuditPageModule)
  },
  {
    path: 'parametrage',
    loadChildren: () => import('./page/parametrage/parametrage.module').then( m => m.ParametragePageModule)
  },
  {
    path: 'listaudit',
    loadChildren: () => import('./page/listaudit/listaudit.module').then( m => m.ListauditPageModule)
  },
  {
    path: 'listchecklist',
    loadChildren: () => import('./page/listchecklist/listchecklist.module').then( m => m.ListchecklistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
