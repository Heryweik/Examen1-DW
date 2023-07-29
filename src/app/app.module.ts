import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { CallsComponent } from './pages/calls/calls.component';
import { ChatIndividualComponent } from './pages/chat-individual/chat-individual.component';
import { ChatGrupalComponent } from './pages/chat-grupal/chat-grupal.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './pages/mensaje/mensaje.component';
import { MensajeGrupoComponent } from './pages/mensaje-grupo/mensaje-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatsComponent,
    TeamsComponent,
    CallsComponent,
    ChatIndividualComponent,
    ChatGrupalComponent,
    MensajeComponent,
    MensajeGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
