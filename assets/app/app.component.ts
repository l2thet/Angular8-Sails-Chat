import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ioService } from './services/io.service'

@Component({
  selector: 'app-main',
  templateUrl:"./app/app.component.html",
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
        this._ioService.getMessage()
            .subscribe(message => {
                let messageContent = "";
                messageContent = message["message"];
                this._ioServiceMessages.push({
                    message: messageContent
                });
                this._changeDetector.detectChanges();
            });
    }

    subscribeClick():void{
        this._ioService.subscribeToSails();
    }

    unsubClick():void{
        this._ioService.unsubscribeToSails();
    }

    sendMessage():void{
        if (this.messageToSend) {
            let messageObject = {
                message: this.messageToSend
            }
            this.messageToSend = "";
            this._ioService.sendMessage(messageObject);
        }
    }
}