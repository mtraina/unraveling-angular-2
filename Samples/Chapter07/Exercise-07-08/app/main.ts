import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

setTimeout(
  () => platformBrowserDynamic().bootstrapModule(AppModule),
  2000 
)
