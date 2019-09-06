System.config({
  paths: {
    'npm:': '../node_modules/'
  },
  map: {
    app: 'app',
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/forms':"npm:@angular/forms/bundles/forms.umd.js",
    'core-js': 'npm:core-js',
    'zone.js': 'npm:zone.js',
    'rxjs': 'npm:rxjs',
    'tslib': 'npm:tslib/tslib.js'
  },
  packages: {
    'app': { "defaultExtension": "js"},
    'rxjs': {"main": "index.js", "defaultExtension": "js"},
    'rxjs/operators': {'main': 'index.js','defaultExtension': 'js'},
    'core-js': { "main":"index.js", "defaultExtension": "js"},
    'core-js/es/reflect': { "defaultExtension": "js" },
    'zone.js': { "defaultExtension": "js"},
    'zone.js/dist': {"main":"zone.js", "defaultExtension": "js"}
  }
});