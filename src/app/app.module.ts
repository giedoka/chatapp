import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './conversation-window/conversation-window.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConversationsListComponent } from './sidebar/conversations-list/conversations-list.component';
import { SingleConversationComponent } from './sidebar/conversations-list/single-conversation/single-conversation.component';
import { MessageInputComponent } from './conversation-window/message-input/message-input.component';
import { ActiveConversationComponent } from './conversation-window/active-conversation/active-conversation.component';
import { FormsModule } from '@angular/forms';
import { ConversationsService } from './shared/conversations.service';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ConversationWindowComponent,
    SidebarComponent,
    ConversationsListComponent,
    SingleConversationComponent,
    MessageInputComponent,
    ActiveConversationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConversationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
