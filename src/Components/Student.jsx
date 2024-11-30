import React, { useState } from "react";
import Navbar from "./Navbar";
import Addnewstudent from "../Components/Addnewstudent"
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../App/slice";
import "./Student.css"


const Student = () => {
  const [toggleadd, settoggleadd] = useState(true);
  const [editId, seteditId] = useState(null);
  const [editname, seteditname] = useState("");
  const [editage, seteditage] = useState("");
  const [editcourse, seteditcourse] = useState("");
  const [editbatch, seteditbatch] = useState("");

  const Dispatch = useDispatch();

  const HandleAddStudent = () => {
    settoggleadd(false);
  };
  const selector = useSelector((state) => state.student.data);

  const handleEdit = (id, name, age, course, batch) => {
    seteditId(id);
    seteditname(name);
    seteditage(age);
    seteditcourse(course);
    seteditbatch(batch);
  };

  const SaveData = () => {
    Dispatch(
      editData({
        id: editId,
        name: editname,
        age: editage,
        course: editcourse,
        batch: editbatch,
      })
    );
    seteditId(null);
  };

  return (
    <>
      <Navbar />

      <div className="AddStudents">
        <h1>Students Detail</h1>

        {toggleadd ? (
          <button className="AddButton" onClick={HandleAddStudent}>
            Add New Student
          </button>
        ) : (
          <>
            <div className="addFormButton">
              <Addnewstudent />
              <button onClick={() => settoggleadd(true)}>Cancel</button>
            </div>
          </>
        )}
      </div>

      {editId ? (
        <>
        <h1>Edit Details</h1>
          <div className="updateContainer">
            <input
              required
              type="text"
              placeholder="Enter Name"
              value={editname}
              onChange={(e) => seteditname(e.target.value)}
            />
            <input
              required
              type="number"
              placeholder="Enter Age"
              value={editage}
              onChange={(e) => seteditage(e.target.value)}
            />
            <br />
            <input
              required
              type="text"
              placeholder="Enter Course"
              value={editcourse}
              onChange={(e) => seteditcourse(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Enter Month of start"
              value={editbatch}
              onChange={(e) => seteditbatch(e.target.value)}
            />
            <br />
            <button type="submit" onClick={SaveData}>
              Save
            </button>
            <button onClick={() => seteditId(null)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <table className="studenttable">
            <thead>
              <tr className="table-header">
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {selector.map((item) => (
                <tr className="table-row" key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() =>
                        handleEdit(
                          item.id,
                          item.name,
                          item.age,
                          item.course,
                          item.batch
                        )
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Student;