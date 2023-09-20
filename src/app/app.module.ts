import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { configuracao } from './configuracao';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';

/* *********************************************** */
/* Importando a configuração de algumas linguagens */
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule, AngularFireModule.initializeApp(configuracao), FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  { provide: LOCALE_ID, useValue: 'pt-br' } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
