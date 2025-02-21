import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [CommonModule, FormsModule],
    exports: [LoginComponent, RegisterComponent]
})
export class AuthModule {}