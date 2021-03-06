/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction model module.
 * @module io.generated.model/NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction
 * @version 1.0.0
 */
class NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction {
    /**
     * Constructs a new <code>NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction</code>.
     * @alias module:io.generated.model/NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction
     * @param bytes {File} 
     */
    constructor(bytes) { 
        
        NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction.initialize(this, bytes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bytes) { 
        obj['bytes'] = bytes;
    }

    /**
     * Constructs a <code>NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction} The populated <code>NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction();

            if (data.hasOwnProperty('bytes')) {
                obj['bytes'] = ApiClient.convertToType(data['bytes'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {File} bytes
 */
NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction.prototype['bytes'] = undefined;






export default NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction;

