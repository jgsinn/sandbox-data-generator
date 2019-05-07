module.exports = function runGenerator (form) {
    const newman = require('./node_modules/newman')
    console.log("setting vars");
    var subdomain = form.subdomain.value;
    var apiKey = form.apikey.value;
    var num = form.number.value;
    console.log("done setting vars");
    //alert(subdomain + "testing this");

    newman.run({
      collection: './collections/sandbox_data_generator.postman_collection',
      globals:
            {
                "id": "683ad527-9279-f62f-ff8d-663df9026ca8",
                "name": "Postman Globals",
                "values": [
                    {
                        "key": "subdomain",
                        "value": "justinsinndev",
                        "enabled": true,
                        "type": "text"
                    },
                    {
                        "key": "apiKey",
                        "value": "f3134f3298ed4a75936cec7658c0a28e",
                        "enabled": true,
                        "type": "text"
                    }
                ],
                "_postman_variable_scope": "globals"
            },
      iterationCount: 30,
      reporters: "cli",


    }).on('start', function (err, args) { // on start of run, log to console
    //alert(args);
    }).on('beforeIteration', function (err, args) { // on start of run, log to console
    //console.log(args);
    //console.log(err);
    }).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
    });

}
