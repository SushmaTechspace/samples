

exports.config = {
    runner: 'local',

    user: '<your-kobiton-username>',    // your username here
    key:  '<your-kobiton-api-key>',     // your api key here

    hostname: 'api.kobiton.com',
    port:     443,
    protocol: 'https',
    path:     '/wd/hub',

    specs: ['./test/specs/sample.test.js'],
    maxInstances: 1,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    logLevel: 'info',

    capabilities: [{
        platformName: 'Android',

        'appium:automationName':  'UiAutomator2',             // your automationName
        'appium:deviceName':      '<your-device-name>',       // your device name
        'appium:platformVersion': '<your-platform-version>',  // your device OS version
        'appium:app':             '<kobiton-store:app-id>',   // your Kobiton app id
        'appium:noReset':         true,
        'appium:fullReset':       false,

        'kobiton:options': {
            sessionName:             'Automation test session',
            sessionDescription:      '',
            deviceOrientation:       'portrait',
            captureScreenshots:      true,
            useConfiguration:        '',
            groupId:                 12854,
            deviceGroup:             'ORGANIZATION',
            tagName:                 '',
            retainDurationInSeconds: '0'
        }
    }]
};


