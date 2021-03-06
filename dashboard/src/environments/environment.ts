// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  UserUrl: 'http://localhost:4000/api/v1/admin/allusers',
  ProductUrl: "http://localhost:4000/api/v1/products",
  ProductDelete: "http://localhost:4000/api/v1/admin/product",
  OrderUrl: "http://localhost:4000/api/v1/orders",
  EditProductUrl: "http://localhost:4000/api/v1/product/edit",
  ProductDeleteUrl: 'http://localhost:4000/api/v1/product/delete',
  OrderDeleteUrl: "http://localhost:4000/api/v1/order/delete/",
  EditOrderUrl: "http://localhost:4000/api/v1/order/edit/",
  AdminIsAuthenticated: "http://localhost:4000/api/v1/admin/users",
  DeleteUserUrl:"http://localhost:4000/api/v1/user/delete/",
  AddNewProduct:"http://localhost:4000/api/v1/admin/product/new",
  GetSingleProduct:"http://localhost:4000/api/v1/product/605f56fc4dfa02270c70dfa0",
  EditUserUrl:"http://localhost:4000/api/v1/admin/user/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
