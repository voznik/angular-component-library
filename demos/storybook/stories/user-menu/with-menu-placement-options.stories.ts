import { select } from '@storybook/addon-knobs';
import { items } from './with-basic-config.stories';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { invertRTL } from '../../src/utils';

export const withMenuPlacement = (): any => ({
    template: `
        <blui-user-menu 
            [(open)]="open"
            avatarValue="AV" 
            menuTitle="Sample Title" 
            menuSubtitle="Sample subtitle"
            [positions]="createPositions(originX, originY, overlayX, overlayY)">
            <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
                <blui-info-list-item *ngFor="let item of items" [dense]="true" 
                    (click)="open=false; item.onSelect();">
                    <mat-icon blui-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                    <div blui-title>{{item.title}}</div>
                </blui-info-list-item>
            </mat-nav-list>
    </blui-user-menu> 
    `,
    props: {
        open: false,
        items: items,
        originX: select('positions.originX', ['start', 'center', 'end'], 'start'),
        originY: select('positions.originY', ['top', 'center', 'bottom'], 'top'),
        overlayX: select('positions.overlayX', ['start', 'center', 'end'], 'start'),
        overlayY: select('positions.overlayY', ['top', 'center', 'bottom'], 'top'),
        invertRTL: invertRTL,
        createPositions: (originX, originY, overlayX, overlayY): ConnectionPositionPair[] => [
            new ConnectionPositionPair({ originX, originY }, { overlayX, overlayY }),
        ],
    },
});
