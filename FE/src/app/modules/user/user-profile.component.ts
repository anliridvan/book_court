import { Component } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
    user = {
        name: 'John Doe',
        email: 'john@example.com'
    };

    editProfile() {
        console.log('Edit Profile clicked');
    }

    logout() {
        console.log('User logged out');
    }
}