import { Link } from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min"
import classes from './navigation.module.css';

const Navigation = ()=>{
        return <Fragment>
            <nav className={classes.navbar}>
                <Link className={classes.link} to="/home">Home</Link>
                <Link className={classes.link} to="/adduser">AddUser</Link>
                <Link  className={classes.link}to="/about">About</Link>
            </nav>
        </Fragment>
}
export default Navigation