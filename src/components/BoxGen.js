import React, { useState } from 'react';


const BoxGen = (props) => {
    const [color, setColor] = useState("Choose a color");
    const [box, setBox] = useState([]);

    const createBox = (e) => { 
        e.preventDefault(); // prevent default event keeps page from refreshing when you hit summit
        setBox([...box, color]) // using spread operater to merge box and color
    };
    

    return (
        <div className='d-flex flex-wrap'>
        
        <form onSubmit={createBox}>
            <div >
                <label>Any color box: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
            </div>
            <button type="submit" className='btn btn-primary p-1'>Create</button>
        </form>
        {
            box.map((color) =>( // connecting maps to box witch is the created array and looping through them
                <div>
            <div style={{backgroundColor:color, width:"100px", height:"100px", margin:"22px"}}></div> 
            </div>   //styling the box witch is the created array and looping through them
                
        ))
        }
        
</div>
    );
}

export default BoxGen;






