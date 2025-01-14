import * as Colors from '@brightlayer-ui/colors';
import { boolean, color, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withFullConfig = (): any => ({
    template: `
        <blui-info-list-item
            [style.color]="colors.black[500]"
            matRipple
            style="display:flex; cursor: pointer"
            [iconAlign]="iconAlign"
            [wrapInfo]="wrapInfo"
            [wrapSubtitle]="wrapSubtitle"
            [wrapTitle]="wrapTitle"
            [avatar]="avatar"
            [statusColor]="statusColor"
            [hidePadding]="hidePadding"
            [dense]="dense"
            [chevron]="chevron"
            [disabled]="disabled"
            (click)="action()">
            <div blui-title>{{title}}</div>
            <div blui-subtitle>{{subtitle}}</div>
            <div blui-info>{{info}}</div>
            <mat-icon  blui-icon *ngIf="showIcon" 
                [style.color]="iconColor"
                [style.backgroundColor]="getBgColor(avatar, statusColor)">
                devices
            </mat-icon>
        </blui-info-list-item>
      `,
    props: {
        title: text('title', 'Info List Item'),
        subtitle: text('subtitle', 'this is a subtitle within an InfoListItem'),
        info: text('info', 'this is a third line of text'),
        statusColor: color('statusColor', Colors.blue[500]),
        showIcon: boolean('Show Icon', true),
        hidePadding: boolean('hidePadding', false),
        chevron: boolean('chevron', true),
        dense: boolean('dense', false),
        wrapTitle: boolean('wrapTitle', false),
        wrapSubtitle: boolean('wrapSubtitle', false),
        wrapInfo: boolean('wrapInfo', false),
        iconAlign: select('iconAlign', ['left', 'center', 'right'], 'left'),
        iconColor: color('icon color', Colors.black[500]),
        avatar: boolean('avatar', false),
        disabled: boolean('disabled', false),
        action: action('InfoListItem clicked'),
        getBgColor: (avatar: boolean, statusColor: string): string => (avatar ? statusColor : 'unset'),
        colors: Colors,
    },
});
