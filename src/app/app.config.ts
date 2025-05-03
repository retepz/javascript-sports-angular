import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import {
  provideRouter,
  RouterFeatures,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router'
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental'
import { routes } from './app.routes'
import { provideHttpClient, withFetch } from '@angular/common/http'
import environment from '../environment'

const generateRouterFeatures = (): RouterFeatures[] => {
  const base: RouterFeatures[] = [withComponentInputBinding()]
  if (environment.name === 'production') {
    return [...base, withHashLocation()]
  }
  return base
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, ...generateRouterFeatures()),
    provideHttpClient(withFetch()),
    provideTanStackQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
    ),
  ],
}
