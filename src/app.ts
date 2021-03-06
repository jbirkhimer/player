/// <reference path="js/require.d.ts" />



require.config({
    paths: {
        'jquery': 'js/jquery-1.10.2.min',
        'plugins': 'js/jquery.plugins',
        'underscore': 'js/underscore-min',
        'pubsub': 'js/pubsub',
        'jsviews': 'js/jsviews.min',
        'yepnope': 'js/yepnope.1.5.4-min',
        'yepnopecss': 'js/yepnope.css',
        'l10n': 'js/l10n'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        plugins: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        pubsub: {
            deps: ['jquery']
        },
        jsviews: {
            deps: ['jquery']
        },
        yepnopecss: {
            deps: ['yepnope']
        }
    }
});

require([
    'jquery',
    'plugins',
    'underscore',
    'pubsub',
    'jsviews',
    'yepnope',
    'yepnopecss',
    'bootstrapper',
    'l10n',
    'extensions/coreplayer-seadragon-extension/extension',
    'extensions/coreplayer-seadragon-extension/iiifProvider',
    'extensions/coreplayer-seadragon-extension/provider',
    'extensions/coreplayer-mediaelement-extension/extension',
    'extensions/coreplayer-mediaelement-extension/provider',
    'extensions/coreplayer-pdf-extension/extension',
    'extensions/coreplayer-pdf-extension/provider'
    ],
    ($,
    plugins,
    _,
    pubsub,
    jsviews,
    yepnope,
    yepnopecss,
    bootstrapper,
    l10n,
    seadragonExtension,
    seadragonIIIFProvider,
    seadragonProvider,
    mediaelementExtension,
    mediaelementProvider,
    pdfExtension,
    pdfProvider) => {

        window.DEBUG = true; // this line is removed on build.

        var extensions = {};

        extensions['seadragon/dzi'] = {
            type: seadragonExtension.Extension,
            provider: seadragonProvider.Provider,
            name: 'coreplayer-seadragon-extension'
        };

        extensions['seadragon/iiif'] = {
            type: seadragonExtension.Extension,
            provider: seadragonIIIFProvider.Provider,
            name: 'coreplayer-seadragon-extension'
        };

        extensions['video/mp4'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            name: 'coreplayer-mediaelement-extension'
        };

        extensions['video/multiple-sources'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            name: 'coreplayer-mediaelement-extension'
        };

        extensions['audio/mp3'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            name: 'coreplayer-mediaelement-extension'
        };

        extensions['application/pdf'] = {
            type: pdfExtension.Extension,
            provider: pdfProvider.Provider,
            name: 'coreplayer-pdf-extension'
        };

        new bootstrapper(extensions);
    });