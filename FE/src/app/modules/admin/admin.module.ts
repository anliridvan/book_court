import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserManagementComponent } from './admin/user-management.component';

@NgModule({
    declarations: [AdminComponent, UserManagementComponent],
    imports: [CommonModule, RouterModule.forChild([
        { path: '', component: AdminComponent },
        { path: 'users', component: UserManagementComponent }
    ])],
    exports: [AdminComponent, UserManagementComponent]
})
export class AdminModule {}