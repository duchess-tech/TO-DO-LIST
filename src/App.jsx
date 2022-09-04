import './App.css';
import React from 'react';
import Display from './Display';
import { useState } from 'react';
import { ReactDOM } from 'react';



export default function App() {
  const [input, setinput] = useState({ title: '', description: "", time: "", date: "" })

  const getdata1 = (e) => {
    const firstInput = e.target.value
    e.preventDefault()
    setinput({ ...input, title: firstInput })
  }
  const getdata2 = (e) => {
    const SecondInput = e.target.value
    e.preventDefault()
    setinput({ ...input, description: SecondInput })
  }
  const getdata3 = (e) => {
    const ThirdInput = e.target.value
    e.preventDefault()
    setinput({ ...input, time: ThirdInput })
  }
  const getdata4 = (e) => {
    const FourthInput = e.target.value
    e.preventDefault()
    setinput({ ...input, date: FourthInput })
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(input.title)
    console.log(Object.keys(input))
    console.log(Object.values(input))
    return (

      Object.keys(input).map((key, index) => {
        <tr key={index}>
          <td>{input[index]}</td>
          {/* <h1>{key}:{index[key]}</h1> */}
        </tr>

      })
    )

    {
      Object.values(input).map((value, index) => {
        return (

          <tr key={index}>
            <td>{input.value}</td>
            <td>
              <button key={index} className="table-btn">Remove</button>
            </td>
          </tr>

        )
      }

      )
    }
  }
  return (
    <div>
      <form   >
        <label >Title</label>
        <input type='text' id='title' className='form-control' value={input.title} onChange={getdata1} />

        <label   > Description</label>
        <textarea value={input.description} onChange={getdata2} className='form-control' />

        <label >Time</label>
        <input type='time' value={input.time} onChange={getdata3} className='form-control' />

        <label >Date</label>
        <input type='date' value={input.date} onChange={getdata4} className='form-control' />

        <button onClick={submit} className='btn-rounded-pills'>Save</button>
      </form>



      {/* <Display /> */}
    </div>
  )

}

