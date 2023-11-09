import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState, AppThunk } from "../../app/store"
// import { fetchCount } from "./counterAPI"

export interface ITeck{
  _id:string,
  _key:string,
  _date:Date,
  _value1:string,
  _value2:string,
  _value3:string,
  _value4:string,
  _value5:string,
  _value6:string,
} 

export interface IUserState {
  _userId: String,
  _patientId: String,
  _dob: String,
  _firstName: String,
  _height: String,
  _lastName: String,
  _Teck: Map<string, ITeck>           //with Nairi-Tech
  _status: "idle" | "loading" | "failed"
}

export const initialStateUser: IUserState = {
    _userId: "",
    _patientId: "",
    _dob: "",
    _firstName: "",
    _height: "",
    _lastName: "",
    _Teck:new Map<string, ITeck>(),
    _status: "idle"
}

// import React, { useState } from 'react';

// // Define your custom data type
// type MyData = {
//   key: string;
//   value: string;
// };

// const MyComponent: React.FC = () => {
//   const [myData, setMyData] = useState<Map<string, string>>(new Map());

//   // Function to update the data
//   const updateData = () => {
//     const newData = new Map(myData);
//     newData.set('newKey', 'newValue');
//     setMyData(newData);
//   };

//   return (
//     <div>
//       {/* Render your component based on the state (myData) */}
//       {Array.from(myData).map(([key, value]) => (
//         <div key={key}>{`${key}: ${value}`}</div>
//       ))}

//       {/* Button to trigger data update */}
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// };

// export default MyComponent;
// In this example, I've replaced the generic string types with the MyData type for both the key and value of the Map. Adjust the MyData type according to the structure of your actual data.





