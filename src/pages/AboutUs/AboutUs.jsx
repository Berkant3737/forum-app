import React from 'react'

function AboutUs() {
  const handeSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <form action="" onSubmit={handeSubmit}>
        <button type='submit'>Gönder</button>
        <input type="text" />
      </form>
    </div>
  )
}

export default AboutUs