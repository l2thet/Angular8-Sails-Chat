import {Injectable} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ioService {
    private _ioMessage$: Subject<{}>;
    constructor() {
        this._ioMessage$ = <Subject<{}>>new Subject();
        this.registerSailsListener();
    }

    get ioMessage$() {
        return this._ioMessage$.asObservable();
    }

    registerSailsListener(): void {
        self["io"].socket.on('message', (data) => {
            this._ioMessage$.next(data.data);
        }); 
    }

    subscribeToSails() {
        self["io"].socket.get('/room/join');
        this._ioMessage$.next({
            message: "Joined Chat Room"
        });
    }

    sendMessage(submission: {}) {
        self["io"].socket.get('/room/submit', {
            message: submission["message"]
        });
    }

    unsubscribeToSails() {
        self["io"].socket.get('/room/leave');
        this._ioMessage$.next({
            message: "Left Chat Room"
        });
    }
}