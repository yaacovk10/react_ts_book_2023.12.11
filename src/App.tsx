import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';

function App() {
  const [myname, setmyname] = useState("")
  const [myauthor, setmyauthor] = useState("")
  const [mypublish, setmypublish] = useState(0)
  const [book, setbook] = useState<Book[]>([]);
  const addBook= ()=>{
    const newBook : Book= {
        name :myname,
        author: myauthor,
        plubish: mypublish

        }
    setbook([...book,newBook])
  }

    return (
       <div className='App'>
        Name<input onChange={(e)=>setmyname(e.target.value)}/>
        Author<input onChange={(e)=>setmyauthor(e.target.value)}/>
        Publish<input onChange={(e)=>setmypublish(Number(e.target.value))}/>
        <button onClick={()=>addBook()}>Add</button>
        {book.length}
       </div>
  );
}

export default App;
