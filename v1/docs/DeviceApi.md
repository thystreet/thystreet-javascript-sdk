# ThyStreet.DeviceApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](DeviceApi.md#generateToken) | **GET** /device/generate/{deviceId} | 
[**setDeviceToken**](DeviceApi.md#setDeviceToken) | **PUT** /device/token | 
[**setStatus**](DeviceApi.md#setStatus) | **PUT** /device/status | 



## generateToken

> generateToken(deviceId)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.DeviceApi();
let deviceId = "deviceId_example"; // String | 
apiInstance.generateToken(deviceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setDeviceToken

> setDeviceToken(deviceTokenDto)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.DeviceApi();
let deviceTokenDto = new ThyStreet.DeviceTokenDto(); // DeviceTokenDto | 
apiInstance.setDeviceToken(deviceTokenDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTokenDto** | [**DeviceTokenDto**](DeviceTokenDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setStatus

> setStatus(deviceStatusDto)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.DeviceApi();
let deviceStatusDto = new ThyStreet.DeviceStatusDto(); // DeviceStatusDto | 
apiInstance.setStatus(deviceStatusDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceStatusDto** | [**DeviceStatusDto**](DeviceStatusDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

