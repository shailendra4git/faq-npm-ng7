# Faq and User Guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## FAQ and User Guide Content

FAQ and User Guide app is fetching content from AWS S3 "acf-console" bucket.

## Steps to Deploy on Atos Cloud Foundry as an App

```
1. ng build
2. Copy "Staticfile" file from the root directory and paste inside ./dist/faq/
3. Login into CF and target Org > "Global-DevOps" Space > "ACFUI_DND"
4. cf push
```


