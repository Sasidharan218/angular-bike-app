export interface User {
    email: string;
    mobile: number ;
    password: string;
  }
  export interface Booking {
    bike: string;
    date: Date;
    servicetype: string;
  }

 export interface availableservice {
    serviceid:number,
    addedservice: string;
  }