/**
 * ThyStreet
 * Thy Street APIs are completely RESTful and all our responses are returned in JSON.
 *
 * The version of the OpenAPI document: 0.0.1
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
    instance = new ThyStreet.DeviceApi();
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

  describe('DeviceApi', function() {
    describe('generateToken', function() {
      it('should call generateToken successfully', function(done) {
        //uncomment below and update the code to test generateToken
        //instance.generateToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setDeviceToken', function() {
      it('should call setDeviceToken successfully', function(done) {
        //uncomment below and update the code to test setDeviceToken
        //instance.setDeviceToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStatus', function() {
      it('should call setStatus successfully', function(done) {
        //uncomment below and update the code to test setStatus
        //instance.setStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
