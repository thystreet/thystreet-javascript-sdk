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

import ApiClient from '../ApiClient';

/**
 * The SetDeviceDetailsDto model module.
 * @module model/SetDeviceDetailsDto
 * @version 0.0.2
 */
class SetDeviceDetailsDto {
    /**
     * Constructs a new <code>SetDeviceDetailsDto</code>.
     * @alias module:model/SetDeviceDetailsDto
     * @param deviceId {String} Device ID
     * @param tariff {Boolean} Toggle device tariff on public page
     */
    constructor(deviceId, tariff) { 
        
        SetDeviceDetailsDto.initialize(this, deviceId, tariff);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deviceId, tariff) { 
        obj['deviceId'] = deviceId;
        obj['tariff'] = tariff;
    }

    /**
     * Constructs a <code>SetDeviceDetailsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDeviceDetailsDto} obj Optional instance to populate.
     * @return {module:model/SetDeviceDetailsDto} The populated <code>SetDeviceDetailsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDeviceDetailsDto();

            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('tariff')) {
                obj['tariff'] = ApiClient.convertToType(data['tariff'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Device ID
 * @member {String} deviceId
 */
SetDeviceDetailsDto.prototype['deviceId'] = undefined;

/**
 * Toggle device tariff on public page
 * @member {Boolean} tariff
 */
SetDeviceDetailsDto.prototype['tariff'] = undefined;






export default SetDeviceDetailsDto;

