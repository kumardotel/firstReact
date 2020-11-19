import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';






const List = (props) => {

  const [line, setLine] = useState(false);

    const cutIt = () => {
      setLine(true);
    }

    return(
   <div className="todo-style">
   <span className = "delicon" onClick={cutIt}> <DeleteOutlineIcon className="delit"  /> </span>
     <li style={{textDecoration: line ? "line-through" : 'none'}} >{props.text}</li>
    </div> )
}

export default List;