## LARAVEL - VUE BOILERPLATE

#### Requirements
```bash
node v12.22.1
npm v6.14.12
php v7.4.2
laravel 8
```

#### Installation
```bash
npm install
composer install
```

#### Run lint & test
```bash
npm run lint    // ESLint
npm run test    // Jest test
npm run btest   // PHPUnit test
npm run phpcs   // PHPCodeSniffer
npm run phpcs-pear  // PHPCodeSniffer Pear config
npm run sonar // Sonarlint for JS and PHP
npm run sonarjs // Sonarlint for JS
npm run sonarphp // Sonarlint for PHP
npm run sats // Static Analytics tools phpstan & psalm
npm run phpstan // run phpstan analytics
npm run psalm // run psalm analytics  
```

#### Before open a PR
```bash
npm run pr // Run all tests before opening a PR
npm run pr-full // Run all tests including PStan & PHPSalm
```

#### Deploy to PROD
Run lint, Jest tests, PHP tests, PHPCS and generate code for production
```bash
npm run prod
```


#### Facebook Credentials for SignUp/Login
```bash
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
```

#### Google Credentials for SignUp/Login
```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

#### Twitter Credentials for SignUp/Login
```bash
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
```
