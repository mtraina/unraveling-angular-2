import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MessageBusService {
    private messageSource = new Subject<string>();

    messageStream = this.messageSource.asObservable();

    sendMessage(message: string){
        this.messageSource.next(message);
    }
}