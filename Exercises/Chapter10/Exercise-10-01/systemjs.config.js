/**
 * SystemJS configuration file for the Unraveling Angular 2 book
 */
(function (global) {
  System.config({
    paths: {
      // --- Here we define alias
      'npm:': 'node_modules/'
    },
    // --- Map Angular modules to their files
    map: {
      // --- All sample apps are within the 'apps' folder
      app: 'app',
      // --- Angular bundels we use in the book
      '@angular/core': 
        'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 
        'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 
        'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 
        'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 
        'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 
        'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 
        'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 
        'npm:@angular/forms/bundles/forms.umd.js',
      // --- Other libraries we use in the book
      'rxjs': 'npm:rxjs'
    },
    // --- We define how packages should be loaded when no 
    // --- filename and/or no extension is defined
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
