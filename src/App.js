
import { useState } from 'react';

import Values from 'values.js';
import SingleColor from './SingleColor';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list , setList] = useState(new Values("#f15025").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10) 
      setList(colors)
    }catch(error){
      setError(error)
      console.log(error)
    }
  }
  return (
    <div className="App">
      <section className='container'>
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit} className='d-flex flex-row gap-2'>
          <input 
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value) } 
            placeholder='#f15025'
            className="{`${error ? 'error ':null}` } form-control w-50"
          


            />
            <button className='btn btn-info' type='submit' >Submit</button>
            

            </form>
            
            
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return(
            <SingleColor
            key= {index}
            {...color}
            index={index}
            hexColor={color.hex } />
          )
        })}
      </section>
       
    </div>
     
  );
}

export default App;
