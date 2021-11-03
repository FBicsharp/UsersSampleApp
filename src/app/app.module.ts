import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './Service/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => {
      return () => {        
        return appConfigService.loadAppConfig();
      };
    }
  }]
  ,bootstrap: [AppComponent]
})
export class AppModule { }
