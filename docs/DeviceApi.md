# ThyStreet.DeviceApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](DeviceApi.md#generateToken) | **GET** /device/generate/{deviceId} | 
[**setDetails**](DeviceApi.md#setDetails) | **PUT** /device/details | 
[**setToken**](DeviceApi.md#setToken) | **PUT** /device/token | 



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


## setDetails

> setDetails(setDeviceDetailsDto)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.DeviceApi();
let setDeviceDetailsDto = new ThyStreet.SetDeviceDetailsDto(); // SetDeviceDetailsDto | 
apiInstance.setDetails(setDeviceDetailsDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setDeviceDetailsDto** | [**SetDeviceDetailsDto**](SetDeviceDetailsDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setToken

> setToken(deviceTokenDto)



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
apiInstance.setToken(deviceTokenDto).then(() => {
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

