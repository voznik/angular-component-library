import { action } from '@storybook/addon-actions';

const Trex = require('../../assets/trex.png');
const eatonLogo = require('../../assets/EatonLogo.svg');

export const withCustomMenu = (): any => ({
    styles: [
        `
        .header1 {
            margin: 0; 
            font-size: 18px;
            font-weight: 600;
        }
        .header2 {
            margin: 0;
            margin-top: -8px;
            font-size: 42px;
            font-weight: 600;
        }
        .overlay {
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            opacity: 0.2;
        }
        .footer {
            width: 100px;
            align-self: center;
            padding: 16px;
        }
    `,
    ],
    template: `
        <blui-user-menu [avatarImage]="avatarImage" [(open)]="open">
            <div blui-menu-header>
                <div style="padding: 16px 8px 8px 8px; position: relative">
                    <div class="header1">Welcome,</div>
                    <div class="header2">T-Rex</div>
                    <div [style.backgroundImage]="trex" class="overlay"></div>
                </div>
                <mat-divider></mat-divider>
            </div>
            <div blui-menu-body>
                <mat-nav-list [style.paddingTop.px]="0">
                    <mat-list-item *ngFor="let item of items" (click)="open=false; onSelect()">
                        {{item}}
                    </mat-list-item>
                </mat-nav-list>
                <mat-divider></mat-divider>
                <img [src]="eatonLogo" class="footer" />
            </div>
        </blui-user-menu> 
    `,
    props: {
        open: false,
        close: (state): void => {
            state.open = !state.open;
        },
        trex: `url(${Trex})`,
        items: ['My Account', 'Logout'],
        avatarImage: Trex,
        eatonLogo: eatonLogo,
        onSelect: action('custom list-item selected'),
    },
});
