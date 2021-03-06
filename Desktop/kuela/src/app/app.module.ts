import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
import { RelatoComponent } from './componentes/relato/relato.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, CadastroComponent, EntrarComponent, CalculoComponent, ResultadoComponent, RelatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
