import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'image-annotation',
    loadChildren: () => import('./pages/image-annotation/image-annotation.module').then( m => m.ImageAnnotationPageModule)
  },
  {
    path: 'annotation-preview',
    loadChildren: () => import('./pages/annotation-preview/annotation-preview.module').then( m => m.AnnotationPreviewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
