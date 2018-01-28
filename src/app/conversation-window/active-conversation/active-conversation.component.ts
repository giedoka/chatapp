import {Component, Input, OnInit} from '@angular/core';
import { Conversation } from '../../shared/conversation.model';

@Component({
    selector: 'app-active-conversation',
    templateUrl: './active-conversation.component.html',
    styleUrls: ['./active-conversation.component.scss']
})
export class ActiveConversationComponent implements OnInit {

    @Input() activeConversation: Conversation;

    constructor() { }

    ngOnInit() {
    }

}
