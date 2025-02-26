import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./layout/footer/Footer.component";
import { HeaderComponent } from "./layout/header/Header.component";

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule],
    exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {}