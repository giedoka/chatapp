import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './conversation-window/conversation-window.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConversationsListComponent } from './sidebar/conversations-list/conversations-list.component';
import { SingleConversationComponent } from './sidebar/conversations-list/single-conversation/single-conversation.component';
import { MessageInputComponent } from './conversation-window/message-input/message-input.component';
import { ActiveConversationComponent } from './conversation-window/active-conversation/active-conversation.component';
import { ConversationsService } from './shared/conversations.service';
import { UsersService } from './shared/users.service';

const appRoutes = [
  {
    path: '',
    redirectTo: '/conversations',
    pathMatch: 'full'
  },
  {
    path: 'conversations',
    component: ConversationWindowComponent,
    children: [
        {
            path: ':id',
            component: ActiveConversationComponent
        }
    ]
  },
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
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConversationsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
