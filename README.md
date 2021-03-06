 # Visual Analytics Dashboard Application 

![](https://img.shields.io/badge/build-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/ionic_3-✓-blue.svg)
![](https://img.shields.io/badge/angular_2+-✓-blue.svg)
![](https://img.shields.io/badge/parse_server-✓-blue.svg)

# About this Project

This is a Dashboard Application that integrates Ionic 3, Angular 2+ and Parse Server.
It presents interactive mapping, animated charts, and smart tables to help consumers
manage their community development information and data. It's connected to the same database as
[puente-data-collection](https://github.com/hopetambala/puente-data-collection), another project in my repo.

## Some screenshots

<p align="center">
  <img src="https://github.com/hopetambala/puente-dashboard/blob/master/resources/screenshots/map.png" width="40%" />
  <img src="https://github.com/hopetambala/puente-dashboard/blob/master/resources/screenshots/table.png" width="40%" />
</p>

# File structure

```
puente-dashboard/
│
├── resources/
│
├── src/
│   ├── app/
│   │   ├── app.constant.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.template.html
│   │   └── main.ts
│   │
│   ├── assets/
│   │   └── icon/
│   │       └── favicon.ico
│   ├── components/
│   │   ├── smart-table/
│   │   ├── component.module.ts
│   │
│   ├── pages/
│   │   ├── account/
│   │   │   ├── account.html
│   │   │   ├── account.ts
│   │   │   └── account.scss
│   │   │
│   │   │── charts/
│   │   │   ├── charts.html
│   │   │   ├── charts.ts
│   │   │   └── charts.scss
│   │   │
│   │   │── home/
│   │   │   ├── home.html
│   │   │   ├── home.ts
│   │   │   └── home.scss
│   │   │
│   │   ├── maps/
│   │   │   ├── maps.html
│   │   │   ├── maps.ts
│   │   │   └── maps.scss
│   │   │
│   │   ├── tables/
│   │   │   ├── tables.html
│   │   │   ├── tables.ts
│   │   │   └── tables.scss
│   │
│   ├── theme/
│   │   └── variables.scss
│   │
│   └── index.html
│
├── typings/
│    └── cordova-typings.d.ts
│
├── .editorconfig                 * Defines coding styles between editors
├── .gitignore                    * Example git ignore file
├── config.xml                    * Cordova configuration file
├── ionic.config.json             * Ionic configuration file
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
├── README.md                     * This file
├── tsconfig.json                 * Defines the root files and the compiler options
├── tslint.json
└── *.png                         * Images for the README.md
```

## Ionic Framework

The Ionic framework allows for the creation of highly interactive, **cross-platform mobile applications** that can be deployed across iOS, Android, and Windows devices. These hybrid applications include native functionalities, exhaustive gestures, and customizable tools to enhance user-friendliness. Those powerful capabilities are brought to Ionic because it provides mobile-friendly `HTML`, `JS`, and `CSS` components to developers.

Some of its advantages are:

- Open source
- Code once, run on all mobile devices
- One programming language for all mobile OS
- Use of well-known web technologies
- A huge community

## Parse Server + Back4App

**Parse Server** is an open source version of the Parse backend that can be deployed to any infrastructure that can run `Node.js`. It works with the Express web application framework and can be added to existing web applications, or run by itself. Its repository on [Github](https://github.com/parse-community/parse-server) is very active with ~165 contributors and ~14K stars so even if you didn't use the hosted Parse platform before, its open source version is a wise choice if you need to build a backend for you mobile app or your clients apps.

Parse offer a backend to store data, push notifications, social media integration for your app etc. The features provided tend to be helpful in prototyping quickly.

- **General Purpose**: Open Source
- **Hosting**: Self-hosting or Parse Server Hosting providers. Supports local testing and development
- **Custom Code**: Supported via Cloud Code
- **Database**: Mongo DB
- **Push**: Support push notifications for Android, iOS. Also users can manage Push Notifications campaigns
- **Storage**: No restricted time limits and no file storage restrictions. Control over backup, restore and database indexes
- **Ideal for**: General purpose applications

**Back4App** is a BaaS provider much akin to the previous Parse.Com platform before it became open-source. [Back4app](https://www.back4app.com/) it's also open source and user-friendly platform that lets you build, host and manage applications.

# Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <hope@puente-dr.com>
