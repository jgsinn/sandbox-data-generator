# Sandbox Data Generator

## Cloning the Repository
Create a new directory:
```
$ mkdir sandbox-data-generator
$ cd sandbox-data-generator
```

Clone the repository:

Under the repository name, near the top-left of this page, click Clone or download. In the Clone with HTTPs section, click  to copy the clone URL for the repository.
```
$ git clone https://github.com/YOUR-USERNAME/sandbox-data-generator.git
$ cd sandbox-data-generator
```

### Installation
The easiest way to install is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well.

`$ npm install`

This installs all node modules and dependencies allowing you to run the data generator and UI.



Now use one of the following getting started guides to use the sandbox data generator:


## Getting started - CLI
To run the postman collection in your command line, ensure that you have Node.js >= v6 installed.

Navigate to the directory where you cloned this repository in your terminal. Run the following command entering your own subdomain, apikey, and the number of iterations that you want to run the collection.

```
$ npm run recurly-data -- --global-var "subdomain=SUBDOMAIN" --global-var "apiKey=APIKEY" -n NUMBER
````


## Getting started - UI
We also provide a front end UI to easily run the sandbox data generation script. To run this in the UI, start a web server from the main directory which contains the index.html file:

`$ npm run recurly`

You should see something like the following:
```
Starting up http-server, serving ./
Available on:
  http://192.168.0.5:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Now, your browser will navigate to http://127.0.0.1:8080 which should display the Recurly Sandbox Generation UI.
