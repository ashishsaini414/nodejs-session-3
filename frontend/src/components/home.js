import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from './home.module.css'
const Home = (props) => {
  const { data } =props
  const [state, setState] = useState([]);
  useEffect(()=>{
    setState(data)
    console.log(data)
  },[data])
  const userhandler = () => {
    fetch("/loaduser")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          setState((prevState) => [...prevState, data[key]]);
        }
      });
  };

  const deleteHandler = (index) => {
    setState((prevState) => [...prevState.filter((obj, i) => i !== index)]);
    fetch("/removeuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state[index]),
    }).then(response => response.json()).then(data=> console.log(data))
  };

  return (
    <Fragment>
      <button className={classes.loadbutton} onClick={userhandler}>Load Users</button>
      <table className = {classes.table}>
        <td>
          <th>Names</th>
          {state.map((obj) => (
            <tr>{obj.name}</tr>
          ))}
          </td>
          <td>
          <th>Actions</th>
          {state.map((obj, index) => (
            <button className={classes.delete} onClick={() => deleteHandler(index)}>delete</button>
          ))}
        </td>
      </table>
    </Fragment>
  );
};

export default Home;
