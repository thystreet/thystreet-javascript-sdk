/**
 * Thy Street
 * These are API's to easily manage your Thy Street device public pages. Thy Street APIs are completely RESTful and all our responses are returned in JSON.
 *
 * The version of the OpenAPI document: 0.0.2
 * Contact: support@thystreet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ThyStreet);
  }
}(this, function(expect, ThyStreet) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ThyStreet.DeviceTokenDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceTokenDto', function() {
    it('should create an instance of DeviceTokenDto', function() {
      // uncomment below and update the code to test DeviceTokenDto
      //var instane = new ThyStreet.DeviceTokenDto();
      //expect(instance).to.be.a(ThyStreet.DeviceTokenDto);
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new ThyStreet.DeviceTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new ThyStreet.DeviceTokenDto();
      //expect(instance).to.be();
    });

  });

}));