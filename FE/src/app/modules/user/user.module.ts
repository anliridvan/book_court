import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

@NgModule({
    imports: [CommonModule,UserSettingsComponent, UserProfileComponent, RouterModule.forChild([
        { path: 'profile', component: UserProfileComponent },
        { path: 'settings', component: UserSettingsComponent }
    ])],
    exports: [UserProfileComponent, UserSettingsComponent]
})
export class UserModule {}