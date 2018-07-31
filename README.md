# CraftCMS-Bootstrap-SASS-Vue Boilerplate

This project was inspired by several other boilerplates out there. I wanted a project starter that fit my development style with all of the technologies I tend to use in my projects.

### How it works

This boilerplate is setup using Webpack to devlop on a local server (I use Mamp, but you can use whatever you want). the *dev* command will allow you to hot reload your changes, it will output files to the */dev* directory, which is where your local server should point its root to. 

The *build* command will output all production files to the */public_html* directory. Included is a sublime sftp configuration that is setup to automagically ftp any updates to that */build* directory into your server. You will need to configure that. Read below for full instructions.

# Installation

## 1. Download the Boilerplate

To start, run this command in your project directory.

``` sh
$ cd my-project
$ git clone https://github.com/kinoli/craft-bootstrap-sass-vue-boilerplate
```

## 2. Install Dependencies

In the project folder run:

``` sh
$ yarn
```

## 3. Set up the Database

You’ll need to create a database for your Craft project. Craft 3 supports both MySQL 5.5+ and PostgreSQL 9.5+.

If you’re given a choice, we recommend the following database settings in most cases:

- **MySQL**
  - Default Character Set: `utf8`
  - Default Collation: `utf8_unicode_ci`

- **PostgreSQL**
  - Character Set: `UTF8`

## 4. Set up the Web Server

Create a new web server to host your Craft project. Its document root should point to the `dev/` folder.

If you’re not using MAMP, you will probably need to update your `hosts` file, so your computer knows to route requests to your chosen host name to the local computer.

- **macOS/Linux/Unix:** `/etc/hosts`
- **Windows:** `\Windows\System32\drivers\etc\hosts`

## 5. Setup Craft

If your web server is setup properly, you can run the Craft installation by pointing your web browser to `http://HOSTNAME/index.php?p=admin` (substituting `HOSTNAME` with your new web server’s host name). You should get the Craft installation wizard, which will take you through a couple setup screens, and then perform the actual installation.

The other way to setup craft is to configure your `/cms/.env` file with its connection settings. You can either edit the file manually, or run the `./craft setup` command from the root project directory in your terminal.

> {tip} That `.env` file will be processed via [PHP dotenv], which the `craftcms/craft` project comes with preinstalled. The advantage of using PHP dotenv is that it offers a place to store sensitive information (like database connection settings) in a file that doesn’t get committed to your Git repository.

## 6. Configure Webpack Server

The local webpack server needs to have the same hostname that you setup for the project. Edit the host information in following files.
```
/.kinoli/webpack.server.js
/.kinoli/webpack.dev.js
```

## 7. Configure FTP Deployment

Configure you IDE's ftp sync from `/public_html` and `/cms` to your webserver. Note, the /cms directory should be a level above your public root directory.

This boilerplate has sftp config setup for VSCode, which I highly recommend, but not required. A sample vscode config file is included in `/.vscode/sftp.json`, you can simply configure it as needed.

# Workflow

Use Node.js scripts to run build tools.

* `$ yarn dev` - Launches webpack-dev-server and recompiles files whenever they change
* `$ yarn build` - Creates production ready code inside the `/public_html` directory and ftp sync'd to the server

After running `` $ yarn dev `` or `` $ yarn build ``, your deploy-ready code will be taken from the ``./src/`` directory and placed within the ``./web/build/`` and ``./templates/`` directories respectively.

## Under the Hood

This project scaffolding is rather opinionated and makes use of the following tools, open source projects, and architecture methodologies:

* [Craft CMS 3](https://craftcms.com/) - Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike.
* [Webpack 4](https://webpack.js.org/) - A bundler for JavaScript and friends with [code splitting](https://webpack.js.org/guides/code-splitting/) and [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/) set up.
* [Bootstrap 4](https://getbootstrap.com/) - Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
* [Vue.js 2](https://vuejs.org/) - The Progressive JavaScript Framework
* [ECMAScript 2015 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) - JavaScript's built-in modules
* [SASS](http://tachyons.io/) - CSS with superpowers
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX.
* [Standard JS](https://standardjs.com/) - JavaScript Standard Style
* [Fontastic](http://fontastic.me/) - Add Vector Icons to Your Website

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).
