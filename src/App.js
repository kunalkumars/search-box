import React, { Component,useState,useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
import { res } from './data.js';


 function App(){
   const [historyData,setHistoryData]=useState([])
   const[searchField,setSearchField] =useState('');

   const filteredData = res.filter(e =>
    e.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchChange = event => {
    // console.log(event.target.value,'input value')
     setSearchField(event.target.value)
     historyData.push(searchField)
     console.log(historyData,'historyData')
     localStorage.setItem("historyData", 'aditya')
     console.log(localStorage.getItem('historyData'),'88888')      
    };


   useEffect(()=>{
   let hData= localStorage.getItem(historyData) || [];
   console.log(hData,'hData')

   setHistoryData(hData);
     
   },[])


  return(
    <div className='App'>
        <SearchBox onSearchChange={onSearchChange} history={historyData} />
        <CardList searchdata={filteredData} />
    </div>
  )
 }


export default App;

 //   // fetch('https://hn.algolia.com/api/v1/search?query=react')
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(
//     //     // (async res=>{
//     //     // console.log(await res.json(),'res')
//     //     // })

//     //     //console.log(response,'3333')
//     //     response => response.json()
//     //     )
//     //   .then(users => this.setState({ searchdata: users }));
   
//   this.setState({ searchdata: res })
//   }
