import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contato', component: ContatoComponent },
];
