// Import global stylesheet
import './styles/main.css';

import {platformBrowser, platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);