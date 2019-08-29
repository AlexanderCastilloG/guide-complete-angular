import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropwodnDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { loggingService } from '../logging.service';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropwodnDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropwodnDirective,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [loggingService]
})
export class SharedModule {

}