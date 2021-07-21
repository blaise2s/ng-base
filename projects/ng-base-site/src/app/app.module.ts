import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Replace with @company/ng-base (/projectName) when configured and published
import { TableModule } from 'projects/ng-base/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
