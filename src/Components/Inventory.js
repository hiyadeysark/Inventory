import React from 'react'

const Inventory = () => {
  const btn1 = (e) => {
      e.preventDefault();
      alert('Power stone used');
      button1.style.display = "none";
  }
  return (
      <>
  <div className="wrapper">
    <div className="cols">
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "blueviolet" }}>
            <div className="inner power">
              <p>Power Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>description</p>
              <br />
              <button className="button usebutton" onClick={btn1}>
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "yellow" }}>
            <div className="inner">
              <p>Mind Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
              <button className=" button usebutton">
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "blue" }}>
            <div className="inner">
              <p>Space Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
              <button className="button usebutton">
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "red" }}>
            <div className="inner">
              <p>Reality Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
              <button className="button usebutton" id="btn4">
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "green" }}>
            <div className="inner">
              <p>Time Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
              <button className="button usebutton" id="btn5">
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front" style={{ backgroundColor: "orange" }}>
            <div className="inner">
              <p>Soul Stone</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
              <button className="button usebutton" id="btn6">
                Use Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Inventory
