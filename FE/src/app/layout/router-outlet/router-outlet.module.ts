import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutletComponent } from './router-outlet.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([]), RouterOutletComponent],
    exports: [RouterOutletComponent]
})
export class RouterOutletModule {}
