## LARAVEL - VUE Boilerplate

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
npm run sonar // Sonarlint for JS and PHP
npm run sonarjs // Sonarlint for JS
npm run sonarphp // Sonarlint for PHP
npm run phpstan // run phpstan analytics 
```

#### Before open a PR
```bash
npm run pr // Run all tests before opening a PR
```

#### Deploy to PROD
Run lint, Jest tests, PHP tests, PHPCS and generate code for production
```bash
npm run prod
```
