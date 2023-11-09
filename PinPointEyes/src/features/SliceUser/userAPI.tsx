import axios from "axios"
import {IUserState, ITeck} from "./User"


const UserCheck: IUserState[] = 
      [
        {_userId: "0",
      _patientId: "_patientId0",
      _dob: "_dob0",
      _firstName: "_firstName0",
      _height: "_height0",
      _lastName: "_lastName0.@gmail",
      _Teck:new Map<string, ITeck>(),
      _status: "idle"},
       
      {_userId: "1",
        _patientId: "_patientId1",
        _dob: "_dob1",
        _firstName: "_firstName1",
        _height: "_height1",
        _lastName: "_lastName1.@gmail",
        _Teck:new Map<string, ITeck>(),
        _status: "idle"},
           
        {_userId: "2",
            _patientId: "_patientId2",
            _dob: "_dob2",
            _firstName: "_firstName2",
            _height: "_height2",
            _lastName: "_lastName2.@gmail",
            _Teck:new Map<string, ITeck>(),
            _status: "idle"}
    
    ]


// A mock function to mimic making an async request for data
export function fetchCount(LastName: string) {
    return new Promise<{ data: IUserState }>( //
        (resolve, reject) =>
                setTimeout(() =>{
                    const User:IUserState | undefined = UserCheck.find((obj)=>obj._lastName === LastName);
                    if (User)
                        return resolve({ data: User})
                    return reject("NO user LastName");
                }, 500),
    )
}
/*
    // If there are two parameters: id and category
    const id = 123;
    const category = 'electronics';
    
    // You can add parameters directly to the URL
    // axios.get(`https://api.example.com/data?id=${id}&category=${category}`)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    */
  