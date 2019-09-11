import {Injectable, ɵCompiler_compileModuleSync__POST_R3__} from '@angular/core';
import { observable, Subject } from 'rxjs';

@Injectable()
export class ioService {
    private _ioMessage$: Subject<{}>;

    constructor() {
        this._ioMessage$ = <Subject<{}>>new Subject();
        this.registerSailsListener();
    }

    getMessage() {
        return this._ioMessage$.asObservable();
    }

    registerSailsListener(): void {
        self["io"].socket.on('message', (data) => {
            this._ioMessage$.next(data);
        }); 
    }

    subscribeToSails() {
        self["io"].socket.get('http://localhost:1337/api/Room/join');
        this._ioMessage$.next({
            message: "Joined Chat Room"
        });
    }

    sendMessage(submission: {}) {
        self["io"].socket.get('http://localhost:1337/api/Room/sendMessage', {
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