import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withFullConfig = (): any => ({
    styles: [
        `
        .step-content {
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-weight: 600;
       }
    `,
    ],
    template: ` 
     <div>
         <div class="step-content">Step #{{activeStep + 1}}</div>
         <mat-divider></mat-divider>
         <blui-mobile-stepper [variant]="variant" [steps]="steps" 
            [activeStep]="activeStep" 
            [style.width.px]="width">
            <button blui-back-button mat-stroked-button color="primary" 
                [style.visibility]="showBackButton ? 'visible' : 'hidden' "
                [disabled]="activeStep === 0" 
                (click)="activeStep = activeStep - 1; goBack();">{{ backButtonText }} </button>
            <button blui-next-button mat-flat-button color="primary" 
                [style.visibility]="showNextButton ? 'visible' : 'hidden' "
                [disabled]="activeStep === steps - 1" 
                (click)="activeStep = activeStep + 1; goNext();"> {{ nextButtonText }} </button>
         </blui-mobile-stepper>
     </div>
    `,
    props: {
        activeStep: 0,
        variant: select('variant', ['dots', 'text', 'progress'], 'dots'),
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        width: number('Container Width', 320, { range: true, min: 250, max: 400, step: 10 }),
        goBack: action('Back Button Clicked'),
        goNext: action('Next Button Clicked'),
        showBackButton: boolean('Show Back Button', true),
        showNextButton: boolean('Show Next Button', true),
        backButtonText: text('Back Button Text', 'Back'),
        nextButtonText: text('Next Button Text', 'Next'),
    },
});
