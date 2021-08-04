# ThyStreet.OrderApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setStatus**](OrderApi.md#setStatus) | **PUT** /order/status | 



## setStatus

> setStatus(orderStatusDto)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.OrderApi();
let orderStatusDto = new ThyStreet.OrderStatusDto(); // OrderStatusDto | 
apiInstance.setStatus(orderStatusDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderStatusDto** | [**OrderStatusDto**](OrderStatusDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

