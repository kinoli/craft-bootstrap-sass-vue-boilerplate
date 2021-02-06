# CraftCMS-Bootstrap-SASS-Vue Boilerplate

As I discover new technologies, I find my boilerplates evolving and getting better (and more complicated). This project was helped along by several other boilerplates out there. I wanted a project starter that fit my development style with all of the technologies I use in most of my projects.

## How it works

This boilerplate is setup using Webpack to devlop on a local server (You can use Nitro/Docker or even Mamp, use whatever you want). the *dev* script will allow you to hot reload your changes, it will output files to the */dev* directory, which is where your local server should point its root to.

The *build* script will output all production files to the */public_html* directory. Included is a VSCode sftp configuration that is setup to automagically ftp any updates to that */build* directory into your server. You will need to configure that. Read below for full instructions.

### Workflow

Use Node.js (NPM or yarn) scripts to run build tools.

* `$ yarn dev` - Launches webpack-dev-server and recompiles files whenever they change
* `$ yarn build` - Creates production ready code inside the `/public_html` directory and ftp sync'd to the server

After running `` $ yarn dev `` or `` $ yarn build ``, your deploy-ready code will be taken from the ``./src/`` directory and placed within the ``./public_html/`` and ``./cms/templates/`` directories respectively.

## Main Features

This project scaffolding is rather opinionated and makes use of the following tools, open source projects, and architecture methodologies:

* [Craft CMS 3](https://craftcms.com/) - Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike.
* [Craft Nitro 2 / Docker](https://craftcms.com/docs/nitro/2.x/) - Quickly setup a local docker server configured for Craft
* [Webpack 4](https://webpack.js.org/) - A bundler for JavaScript and friends with [code splitting](https://webpack.js.org/guides/code-splitting/) and [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/) set up.
* [Bootstrap-Vue](https://bootstrap-vue.js.org/) - The non-jquery vue.js port of Bootstrap 4.
* [Vue.js 2](https://vuejs.org/) - The Progressive JavaScript Framework
* [ECMAScript 2015 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) - JavaScript's built-in modules
* [SASS](http://tachyons.io/) - CSS with superpowers
* [axios](https://github.com/axios/axios) - [Not implemented yet] Promise based HTTP client for async requests through Vue.js
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX with autoformatting
* [StyleLint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles with autoformatting.
* [IcoMoon](https://icomoon.io/) - Add Vector Icons to Your Website
* [Jest with Vue Testing library](https://testing-library.com/docs/vue-testing-library/intro/) - The real way to unit test your components
* [Storybook](https://storybook.js.org/) - Make UI component development a breeze
* [Standard JS](https://standardjs.com/) - JavaScript Standard Style

# Installation

## 1. Download the Boilerplate

To start, run this command in your project directory.

``` sh
$ cd my-project
$ git clone https://github.com/kinoli/craft-bootstrap-sass-vue-boilerplate ./
```

> {Tip} I'f you want to repoint your git origin to start using your own remote repo. Run this command.
```
$ git remote set-url origin git@gitlab.[YOUR-SERVER].com:GROUP/REPO-NAME.git
```

## 2. Install Dependencies

In the project folder run:

``` sh
$ yarn
// or
$ npm install
```

## 3. Set up the Web Server with Nitro
### Nitro/Docker
Craft has created this super simple tool to run a local dev server for Craft within Docker. It will hardwire your local environment specifically for Craft and in my experience removes all the headaches of setting up and configuring a Docker environment on your own. Use it.

**Note:** You need to have Docker installed and running at this point.
```
// install Nitro globally with Homebrew
brew tap craftcms/nitro
brew install nitro

// initialize nitro and add the containers. Make sure you point to the dev directory for your server root.
nitro init
nitro add
```

## 4. Install Craft
Now run the craft install script.
```
nitro craft install
```

Add your domain to the cms/.env file, the dev webpack server uses it
```sh
PRIMARY_DOMAIN=my-domain.nitro
```

Now, run the web server so you can load the Craft installation. This will copy the necessary files into your `/dev` directory and setup hot reloading for watching changes to vue components and Craft/Twig templates

``` sh
yarn dev
```

> {tip} That `.env` file will be processed via [PHP dotenv], which the `craftcms/craft` project comes with preinstalled. The advantage of using PHP dotenv is that it offers a place to store sensitive information (like database connection settings) in a file that doesn’t get committed to your Git repository.

## You're done!

------------------------

## Workflow

Some helpful commands to run during your workflow

```sh
// show all available nitro commands
nitro

// start up nitro - fires up all of the docker containers
nitro start

// stop nitro - brings all of the docker containers down
nitro stop

// fire up the development server for Vue
yarn dev

// fires up Storybook for rapid UI component development (Use this for Vue development)
yarn storybook

// run unit tests
yarn test

// This will update your redactor styling based on your website styling and what you add in _redactor-custom.scss
yarn redactor
```

## Update and Install Craft Plugins

Login to your craft installation at `/admin` and navigate to the Utilities tab and run all the updates so your CraftCMS installation is up to date.

Here are some plugins that I like to use on my websites. These can all be installed within your craft configuration at `/admin`.

* Control Panel Nav
* Embedded Assets
* Gatekeeper
* Groupie
* Redactor
* Redactor Custom Styles
* Redactor Tweaks

## Configure FTP Deployment

Deployment is done by running `yarn build` and everything in the /public_html directory needs to be sync'd to your server, as well, any changes in your /cms/templates directory.

To do ftp deployment through your IDE's ftp sync from `/public_html` and `/cms` to your webserver. Note, the /cms directory should be a level above your public root directory.

This boilerplate has sftp config setup for VSCode, which I highly recommend, but not required. A sample vscode config file is included in `/.vscode/sftp.json`, you can simply configure it as needed.

Deployment should be automated, but thats up to you to decide how you want to do it. After you do a `yarn build`, just upload the following...

* /cms/templates/layout.twig
* /public_html/lib/

There is likely a way to automate this either through github, gitLab or even Webpack, but it currently is not setup yet.

# About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

# About me

I am an experienced full-stack web/app contractor from Canada. I'm always available to assist with questions or bug fixes or to hire (if you need more of my time).

My website: ***[JesseKnowles.com](http://www.jesseknowles.com)***
