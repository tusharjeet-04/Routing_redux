import {configureStore} from "@reduxjs/toolkit"
import newstudent from "./slice"

 export const store = configureStore({
    reducer : {
        student : newstudent,
    }
})