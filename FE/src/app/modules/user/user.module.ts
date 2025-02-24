import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user/user-profile.component';
import { UserSettingsComponent } from './user/user-settings.component';

@NgModule({
    declarations: [UserProfileComponent, UserSettingsComponent],
    imports: [CommonModule, RouterModule.forChild([
        { path: 'profile', component: UserProfileComponent },
        { path: 'settings', component: UserSettingsComponent }
    ])],
    exports: [UserProfileComponent, UserSettingsComponent]
})
export class UserModule {}