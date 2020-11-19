import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const Todo = () => {
    const [currentData, setCurrentData] = useState('');

    const [newItem, setNewItem] = useState([]);


    const listofItems = () => {
        setNewItem((oldItems) => {
            return [...oldItems, currentData]
        })
        setCurrentData("")
    }


    const collectData = (event) => {
        console.log(event.target.value);
        setCurrentData(event.target.value);
    }

    return(
        <>
            <div className="main">
                <div className="center">
                    <br/>
                     <h1>ToDo List</h1>
                    <br/>
                    <div className="content">
                    <input type="text" value={currentData} placeholder="Add your list" className="inputtext" onChange={collectData}/>
                    <Button  onClick={listofItems}> <AddIcon className="add-btn" /> </Button>
                    </div>
                     <br/>
                    <ul>
                        {newItem.map((value, index) => {
                            return <List key = {index} text= {value} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo;