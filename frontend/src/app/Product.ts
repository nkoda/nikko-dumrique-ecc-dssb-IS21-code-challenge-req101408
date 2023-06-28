export interface Product {
    productId: string;
    productName: string;
    productOwnerName: string;
    developers: string[];
    scrumMasterName: string;
    startDate: string;
    methodology: string;
    location: string;
  }
  
  export const keyOfProducts: string[] = [
    'productId',
    'productName',
    'productOwnerName',
    'developers',
    'scrumMasterName',
    'startDate',
    'methodology',
    'location'
  ]
  
  