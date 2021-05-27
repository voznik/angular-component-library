import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <pxb-app-bar [scrollContainerId]="scrollContainerId"></pxb-app-bar>
    `,
    props: {
        value: text('collapseHeight', '64'),
    },
});