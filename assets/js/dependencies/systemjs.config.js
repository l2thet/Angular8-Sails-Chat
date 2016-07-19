(function(global) {

  //map tells the System loader where to look for things
  var angularVer = "@angular/";

  var  map = {
    'rxjs':                       'rxjs'
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    app:                          { format: 'register', defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
  };

  var packageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'router',
      'platform-browser',
      'platform-browser-dynamic',
      'router-deprecated',
      'testing',
      'upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
      packages[angularVer + pkgName] = { main: 'bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);