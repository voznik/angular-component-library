import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header-toolbar">
            <div class="pxb-drawer-header-icon-wrapper">
                <ng-content select="[icon]"></ng-content>
            </div>

            <div *ngIf="!titleContentWrapper.innerHTML.trim()" class="pxb-drawer-header-wrapper">
                <div *ngIf="title" class="pxb-drawer-header-title">
                    {{ title }}
                </div>

                <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">
                    {{ subtitle }}
                </div>
            </div>

            <div #titleContentWrapper class="pxb-drawer-header-title-content">
                <ng-content select="[titleContent]"></ng-content>
            </div>
        </mat-toolbar>
    `,
    styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent {
    @Input() subtitle: string;
    @Input() title: string;
}
