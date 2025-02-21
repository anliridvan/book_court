import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

@NgModule({
    declarations: [UserProfileComponent, UserSettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'profile', component: UserProfileComponent },
            { path: 'settings', component: UserSettingsComponent }
        ])
    ]
})
export class UserModule {}