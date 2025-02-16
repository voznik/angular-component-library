import { boolean, color, select, text } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { invertRTL } from '../../src/utils';

export const withFullConfig = (): any => ({
    template: `
        <blui-channel-value [value]="value" [units]="units" [color]="color" [prefix]="prefix" [unitSpace]="unitSpace">
            <mat-icon *ngIf="showIcon" [style.color]="iconColor" [style.transform]="invertRTL()">trending_up</mat-icon>
        </blui-channel-value> 
    `,
    props: {
        value: text('value', '123'),
        units: text('units', 'hz'),
        iconColor: color('icon.color', Colors.red[500]),
        showIcon: boolean('Show Icon', true),
        color: color('color', Colors.black[500]),
        prefix: boolean('prefix', false),
        unitSpace: select('unitSpace', ['show', 'hide', 'auto'], 'auto'),
        invertRTL: invertRTL,
    },
});
