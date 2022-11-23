import React from 'react';
import './search-box.styles.css';

export const SearchBox = props =>{
  console.log(props,' 55555')
return (
  
  <div>
  <input
      className='search-box'
      type='text'
      placeholder='search here'
      onChange={props.onSearchChange}
      width="600px"
    /><br/>
  <button onClick={localStorage.setItem('historyData',[])}>Clear</button>
  
    <ul style={{listStyleType:"none"}}>
      {props.history.map(e=>{
        return  <li>{e}</li>
        })} 
    </ul>
    
  </div>
  
)
} 
