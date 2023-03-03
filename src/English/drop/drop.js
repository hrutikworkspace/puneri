import React from 'react'

function Drop(props) {
  return (
    <>
        <div>
            <select onChange={props.onChange}>
                <option>select language</option>
                <option value={'en'}>English</option>
                <option value={'ma'}>Marathi</option>
            </select>
        </div>
    </>
  )
}

export default Drop;



















