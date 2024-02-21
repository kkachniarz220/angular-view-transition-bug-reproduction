import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';
import {EntityFindComponent} from "./routes/entity-find.component";
import {EntityDetailsComponent} from "./routes/entity-details.component";

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter([
          {
            path: 'entity/find',
            component: EntityFindComponent,
          },
          {
            path: 'entity/:id',
            component: EntityDetailsComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'entity/find'
          }
        ],
        withViewTransitions()
      ),
      provideZoneChangeDetection({eventCoalescing: true}),
    ]
  }
;
