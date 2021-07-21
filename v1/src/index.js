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


import ApiClient from './ApiClient';
import DeviceStatusDto from './model/DeviceStatusDto';
import DeviceTokenDto from './model/DeviceTokenDto';
import OrderStatusDto from './model/OrderStatusDto';
import DeviceApi from './api/DeviceApi';
import OrderApi from './api/OrderApi';


/**
* Thy Street APIs are completely RESTful and all our responses are returned in JSON..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ThyStreet = require('index'); // See note below*.
* var xxxSvc = new ThyStreet.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ThyStreet.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ThyStreet.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ThyStreet.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DeviceStatusDto model constructor.
     * @property {module:model/DeviceStatusDto}
     */
    DeviceStatusDto,

    /**
     * The DeviceTokenDto model constructor.
     * @property {module:model/DeviceTokenDto}
     */
    DeviceTokenDto,

    /**
     * The OrderStatusDto model constructor.
     * @property {module:model/OrderStatusDto}
     */
    OrderStatusDto,

    /**
    * The DeviceApi service constructor.
    * @property {module:api/DeviceApi}
    */
    DeviceApi,

    /**
    * The OrderApi service constructor.
    * @property {module:api/OrderApi}
    */
    OrderApi
};
