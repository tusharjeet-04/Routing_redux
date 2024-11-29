import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addstudent } from '../App/slice'
import { nanoid } from '@reduxjs/toolkit'
import "./student.css"

const Addnewstudent = () => {

const [name,setName] = useState("")
const [age,setAge] = useState(0)
const [course,setCourse] = useState("")
const [batch,setBatch] = useState("")
  

const handlesubmit = (e)=>{
   e.preventDefault(); 
   
   Dispatch(Addstudent({
    id : nanoid(),
    name : name,
    age : age,
    course : course,
    batch : batch
   })
  );
  // console.log(name, age, batch, course, "submit");

     setName (""),
     setAge(0), 
     setCourse(""),
     setBatch("")
}
const Dispatch = useDispatch();




  return (
    <>
    <form className="form-container" onSubmit={handlesubmit}>
   <input className="form-input" type='text' value={name} placeholder='Enter you name' onChange={(e)=>setName(e.target.value)}/>
   <input className="form-input" type='number' value={age} placeholder='Enter you age' onChange={(e)=>setAge(e.target.value)}/>
   <input className="form-input" type='text' value={course} placeholder='Enter you course' onChange={(e)=>setCourse(e.target.value)}/>
   <input className="form-input" type='text' value={batch} placeholder='Enter you batch' onChange={(e)=>setBatch(e.target.value)}/>
   <button className="form-submit" type='submit'>Submit</button>
   </form>
    </>
  )
}

export default Addnewstudent