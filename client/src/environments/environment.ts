// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://0.0.0.0:9000/',
  loginUrl: 'http://0.0.0.0:9000/auth',
  serverJoke: 'https://api.chucknorris.io',
  apiToken: 'EraApi',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
