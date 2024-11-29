import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [
      {id:1,
        name: 'Tusharjeet Rout',
        age: 21,
        course: 'BCA',
        batch: 'July'
      },
      {id:2,
        name: 'Khushi Gupta',
        age: 20,
        course: 'MCA',
        batch: 'August'
      },
      {id:3,
        name: 'Abhishek Sharma',
        age: 23,
        course: 'M.Tech',
        batch: 'September'
      },
      {id:4,
        name: 'Shubham Jatin',
        age: 21,
        course: 'Agriculture',
        batch: 'June'
      },
      {id:5,
        name: 'Rajat Dalal',
        age: 18,
        course: 'BCA',
        batch: 'March'
      }
    ]
}

const slice = createSlice({
    name : "student",
    initialState,
    reducers : {
                 Addstudent : (state,action)=>{
                    
                    state.data.push(action.payload);
                    console.log(action.payload)
                 },

                 editData: (state, action) => {
                    console.log(action.payload,"payload")
                    const {id, name, age, course, batch} = action.payload
                    console.log(id,name,age,course,batch,"data")
                    const idCheck = state.data.filter((item)=>(item.id == id))
                    if(idCheck){
                      idCheck.name=name;
                      idCheck.age=age;
                      idCheck.course=course;
                      idCheck.batch=batch;
                    }
                  }
                
    }
})

export const {Addstudent,editData} = slice.actions;
export default slice.reducer;