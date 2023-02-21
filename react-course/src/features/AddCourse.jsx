import React,{useState} from 'react'
import FormControl from "../UI/FormControl";
import FormGroup from "../UI/FormGroup";

const AddCourse = ({addCourse}) => {
    const [newCourse, setNewCourse] = useState("");
    const inputChangeHandler = (event) => {
        const value = event.target.value;
        setNewCourse(value);
      };
      const submitHandler=(event)=>{
        event.preventDefault();
        addCourse(newCourse);
        setNewCourse('');
      }
  return (
    <form onSubmit={submitHandler}>
        <FormGroup className="mx-3" name="new item form" title="some title">
          <FormControl
            type="text"
            value={newCourse}
            className="form-control"
            placeholder="Add new course"
            name="newcourse"
            onChange={inputChangeHandler}
          />
          <button className="btn btn-primary">Add</button>
        </FormGroup>
      </form>
  )
}

export default AddCourse