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
 * The OrderStatusDto model module.
 * @module model/OrderStatusDto
 * @version 0.0.2
 */
class OrderStatusDto {
    /**
     * Constructs a new <code>OrderStatusDto</code>.
     * @alias module:model/OrderStatusDto
     * @param status {module:model/OrderStatusDto.StatusEnum} Set order status
     */
    constructor(status) { 
        
        OrderStatusDto.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>OrderStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusDto} obj Optional instance to populate.
     * @return {module:model/OrderStatusDto} The populated <code>OrderStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusDto();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Set order status
 * @member {module:model/OrderStatusDto.StatusEnum} status
 */
OrderStatusDto.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
OrderStatusDto['StatusEnum'] = {

    /**
     * value: "CONFIRMED"
     * @const
     */
    "CONFIRMED": "CONFIRMED",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default OrderStatusDto;

