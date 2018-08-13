import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConversationWindowComponent } from './chat/conversation-window/conversation-window.component';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { ConversationsListComponent } from './chat/sidebar/conversations-list/conversations-list.component';
import { SingleConversationComponent } from './chat/sidebar/conversations-list/single-conversation/single-conversation.component';
import { MessageInputComponent } from './chat/conversation-window/message-input/message-input.component';
import { ActiveConversationComponent } from './chat/conversation-window/active-conversation/active-conversation.component';
import { ConversationsService } from './shared/conversations.service';
import { UsersService } from './shared/users.service';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';

import { enableProdMode } from '@angular/core';

enableProdMode();

const appRoutes = [
    {
        path: '',
        redirectTo: '/conversations',
        pathMatch: 'full'
    },
    {
        path: 'conversations',
        component: ChatComponent,
        children: [
            {
                path: ':id',
                component: ConversationWindowComponent
            }
        ]
    },
    {
        path: 'auth',
        component: UserAuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
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
        ActiveConversationComponent,
        ChatComponent,
        UserAuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
    providers: [ConversationsService, UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
