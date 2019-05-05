# Sandbox Data Generator


## Getting started - CLI
To run the postman collection in your command line, ensure that you have Node.js >= v6 and Newman installed. 

### Installation

#### Installing Newman
The easiest way to install Newman is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well.

`$ npm install -g newman`

This installs Newman globally on your system allowing you to run it from anywhere.

#### Cloning Repository 
Under the repository name, near the top-left of this page, click Clone or download. In the Clone with HTTPs section, click  to copy the clone URL for the repository. Open your terminal or Git bash. Change the current working directory to the location where you want the cloned directory to be made. Type git clone, and then paste the URL you copied.

`$ git clone https://github.com/YOUR-USERNAME/THIS-REPOSITORY`
Press Enter. Your local clone will be created.


### Running

Navigate to the directory where you cloned this repository in your terminal. Run the following command entering your own subdomain, apikey, and the number of iterations that you want to run the collection. 

```
$ newman run sandbox_data_generator.postman_collection --global-var "subdomain=SUBDOMAIN" --global-var "apiKey=APIKEY" -n NUMBER
````


## Getting started - UI
We also provide a front end UI to easily run the sandbox data generation script. To run this in the UI, ensure that you have Node.js >= v6 and `http-server` installed.

### Installation

#### Installing http-server
You can install http-server globally on your machine using npm, this will allow you to run a web server from anywhere on your computer.

Open your terminal and enter the following:

`$ npm install -g http-server`

Next, start a web server from the sandbox-generation-UI directory which contains the .html files:

`$ http-server`

You should see something like the following:
```
Starting up http-server, serving ./
Available on:
  http://192.168.0.5:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Now, you can use your browser to navigate to http://127.0.0.1:8080 which should display the Recurly Sandbox Generation UI. 
