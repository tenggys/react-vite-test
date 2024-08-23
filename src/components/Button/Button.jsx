/* eslint-disable react/prop-types */
import classes from './Button.module.css'

export default function Button({ children, onClick, isActive }) {
/*let classes = 'button'
if (isActive) classes += ' active'*/
    console.log(classes);

    return (
        <button className={/*classes*/isActive ? `${classes.button} ${classes.active}` : classes.button} onClick={onClick}>
            { children } 
        </button>
    )
}