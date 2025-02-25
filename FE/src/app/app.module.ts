import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './layout/footer/footer.module';
import { HeaderModule } from './layout/header/header.module';
import { RouterOutletModule } from './layout/router-outlet/router-outlet.module';

@NgModule({
    //declarations: [        AppComponent    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule,
        RouterOutletModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}