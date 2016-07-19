import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { ioService } from './services/io.service'

@Component({
    selector: 'hw-app',
    templateUrl: "./app/app.component.html",
    providers: [ioService],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
    private _ioServiceMessages: Array<{}>;
    messageToSend: string;
    constructor(private _ioService: ioService, private _changeDetector: ChangeDetectorRef) {
        this._ioServiceMessages = new Array<{}>();
        this.messageToSend = "";
    }

    ngOnInit(): void {
        //register to the observable
        this._ioService.ioMessage$
            .subscribe(message => {
                let messageContent = "";
                messageContent = message["message"];
                this._ioServiceMessages.push({
                    message: messageContent
                });
                this._changeDetector.detectChanges();
            });
    }

    sendMessage(): void {
        if (this.messageToSend) {
            let messageObject = {
                message: this.messageToSend
            }
            this.messageToSend = "";
            this._ioService.sendMessage(messageObject);
        }
    }

    subscribeClick(): void {
        //submit a change to the observable through the service
        this._ioService.subscribeToSails();
    }

    unsubClick(): void {
        this._ioService.unsubscribeToSails();
    }
}