import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonagensComponent } from './personagens/personagens.component'; // Importe o PersonagensComponent
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { EpisodioComponent } from './episodio/episodio.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Layout principal
    children: []
  },
  {
    path: 'personagens',
    component: PersonagensComponent // Rota para o componente PersonagensComponent
  },
  {
    path: 'contact',
    component: ContatoComponent // Rota para o componente ContatoComponent
  },
  {
    path: 'episodio',
    component: EpisodioComponent // Rota para o componente EpisodioComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ,FormsModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
