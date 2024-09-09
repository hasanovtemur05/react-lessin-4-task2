import React from 'react'

const App = () => {
  return (
    <>
      <div className="container">
          <div className="header">
            <h1>Header</h1>
          </div>
          <div className="body">

            <div className="left">
              <div className="nav">
                    <h1>Nav</h1>
              </div>
            </div>
            <div className="right">
                <div className="card">
                  <div className="card-left">
                       <h2>figure</h2>
                       <h3>caption</h3>
                  </div>

                </div>
                <div className="card">
                <div className="card-left">
                       <h2>figure</h2>
                       <h3>caption</h3>
                  </div>
                 

                </div>
                <div className="card">
                <div className="card-left">
                       <h2>figure</h2>
                       <h3>caption</h3>
                  </div>


                 
                </div>

            </div>

          </div>
          <div className="footer">
            <h1>Footer</h1>
          </div>
      </div>


      <hr />

      <div className="container2">
        <h1 className='h2'>Animals</h1>
        <div className="box">
          <div className="box-card">
            <h1>Lion</h1>
            <h2>Panthero leo</h2>
            <h3>150kg</h3>
            <h4>meat</h4>
            <button>More info</button>
          </div>
          <div className="box-card">
          <h1>Gorilla</h1>
            <h2>Gorilla bringei</h2>
            <h3>205kg</h3>
            <h4>plants insects</h4>
            <button>More info</button>
          </div>
          <div className="box-card">
          <h1>Zebra</h1>
            <h2>Equus quages</h2>
            <h3>322kg</h3>
            <h4>plants</h4>
            <button>More info</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App