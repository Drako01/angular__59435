import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainWapperComponent } from './components/main-wapper/main-wapper.component';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SideBarComponent,
        MainWapperComponent,
        HeaderAppComponent,
        StudentsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
