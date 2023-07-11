import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense("ORg4AjUWIQA/Gnt2V1hhQlJAfVhdXGdWfFN0RnNYfVR1cV9HZ0wxOX1dQl9gSXhRcUVgWH9dcH1VQmk=");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
