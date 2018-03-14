// conf.js
// var HTTPSProxyAgent = require('https-proxy-agent');
// var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    sauceBuild: "sauce-protractor: " + process.env.BRANCH_NAME + "-" + process.env.BUILD_NUMBER,
    // sauceAgent: sauceRestAgent,

    // webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
        console.log(caps)
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    },{
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 7',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'OS X 10.10',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Derek's Protractor Tests");
    }
}
