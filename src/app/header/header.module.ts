import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
        HeaderService
    ]
})
export class HeaderModule { }