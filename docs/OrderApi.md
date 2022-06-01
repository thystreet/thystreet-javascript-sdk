# ThyStreet.OrderApi

All URIs are relative to *https://cheffy-api.thystreet.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /order/params/{orderToken} | 
[**setStatus**](OrderApi.md#setStatus) | **PUT** /order/status/{orderToken} | 



## getOrderById

> getOrderById(orderToken)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.OrderApi();
let orderToken = thystreet-FucAdwCipV6nLlVsesnu; // String | This is the id recieved from the qrcode or on your webhook
apiInstance.getOrderById(orderToken).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**| This is the id recieved from the qrcode or on your webhook | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setStatus

> setStatus(orderToken, orderStatusDto)



### Example

```javascript
import ThyStreet from '@thystreet/sdk';
let defaultClient = ThyStreet.ApiClient.instance;
// Configure HTTP basic authorization: thystreetAuth
let thystreetAuth = defaultClient.authentications['thystreetAuth'];
thystreetAuth.username = 'YOUR USERNAME';
thystreetAuth.password = 'YOUR PASSWORD';

let apiInstance = new ThyStreet.OrderApi();
let orderToken = thystreet-FucAdwCipV6nLlVsesnu; // String | This is the id recieved from the qrcode or on your webhook
let orderStatusDto = new ThyStreet.OrderStatusDto(); // OrderStatusDto | 
apiInstance.setStatus(orderToken, orderStatusDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**| This is the id recieved from the qrcode or on your webhook | 
 **orderStatusDto** | [**OrderStatusDto**](OrderStatusDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[thystreetAuth](../README.md#thystreetAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

