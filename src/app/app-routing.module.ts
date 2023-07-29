import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { CallsComponent } from './pages/calls/calls.component';
import { ChatIndividualComponent } from './pages/chat-individual/chat-individual.component';
import { ChatGrupalComponent } from './pages/chat-grupal/chat-grupal.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'chats/:id', component: ChatsComponent
  },
  {
    path: 'teams', component: TeamsComponent
  },
  {
    path: 'calls', component: CallsComponent
  },
  {
    path: 'chatIndividual/:id', component: ChatIndividualComponent
  },
  {
    path: 'chatGrupal/:id', component: ChatGrupalComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
