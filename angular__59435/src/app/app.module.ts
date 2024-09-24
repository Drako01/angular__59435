import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainWapperComponent } from './components/main-wapper/main-wapper.component';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { StudentsComponent } from './pages/students/students.component';
import { RoudedBlockDirective } from './shared/rouded-block.directive';
import { FormsModule } from '@angular/forms';
import { ComunicationsComponent } from './pages/comunications/comunications.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SideBarComponent,
        MainWapperComponent,
        HeaderAppComponent,
        StudentsComponent,
        RoudedBlockDirective,
        ComunicationsComponent,
        ListaAlumnosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
