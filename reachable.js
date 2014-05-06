if(Meteor.isServer) {
    var request =  Meteor.require('request');

    var isReachable = function(reqUrl) {

        if(!reqUrl)
            throw new Meteor.Error(400, "Url is emty");

        settings =  {
            url: reqUrl,
            method: 'GET',
            followAllRedirects: true,
            strictSSL: false,
            rejectUnauthorized: false,
            jar: true
        }

        var handshake = Async.runSync(function(done) {
            request(settings, function(err, res, body) {
                done(err, res);
            });
        });


        if(!handshake.error && _.contains([200,301,302],handshake.result.statusCode))
            return true;

        return false;
    }

    //console.log(isReachable('http://intranet.ufrj.br'));
    //console.log(isReachable('http://google.com.br'));
}
