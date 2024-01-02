import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
    <h2>TODO LIST</h2>
   <div className="input-group flex-nowrap">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
  <input type="submit" value="Add"/>
</div>
    
       <table >
         <tr>
            <td>1</td>
            <td>Shweta Gautam</td>
            <td><button type="button" className="btn btn-success">Edit</button></td>
            <td><button type="button" className="btn btn-danger">Delete</button></td>
         </tr>
    <tr>
      <td>2</td>
      <td>Aviyan Shubedi</td>
      <td><button type="button" className="btn btn-success">Edit</button></td>
      <td><button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mukesh Bartaula</td>
      <td><button type="button" className="btn btn-success">Edit</button></td>
       <td><button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  </table>

    </>
  )
}

export default App
