
import './App.css';
import { useState } from 'react';
function App() {
  var cuntDate = new Date().toDateString();
  var cuntTime = new Date().toLocaleTimeString();

  const [updatetime, setupdatetime] = useState(new Date().toLocaleTimeString());


  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    setupdatetime(time)
  }, 1000)


  const styleee = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  }
  let curnDate = new Date();
  curnDate = curnDate.getHours();

  let target = '';
  let cssStyle = {};
  let styleForDiv = {
    backgroundColor: "orange",
    height: "100px",
    textAlign: "center",
    display: "flex",
    justifyCcontent: "center",
    alignItems: "center",
    justifyContent: "center",
  }

  if (curnDate >= 1 && curnDate < 12) {
    target = "Good Morning";
    cssStyle.color = 'green';
  } else if (curnDate >= 12 && curnDate < 19) {
    target = 'Good AfterNoon ';
    cssStyle.color = 'purple';
  }
  else {
    target = 'Good Night';
    cssStyle.color = 'yellow';
  }





  return (
    <div className='body'>

      <div >
        <h1 style={styleForDiv} >
          Hello  , <span style={cssStyle}> {target}</span>
        </h1>
      </div>
      <div >
        <h1>Today Date : {cuntDate}</h1>
        <h1>Current Time  : {cuntTime}</h1>
      </div>


      <div style={styleee} >
        <h1 style={{
          fontSize: '100px',
          textTransform: 'capitalize',
          color: 'orange'
        }}> update time </h1>
        <br />
        <h1
          style={{
            fontSize: '50px',
            textTransform: 'capitalize',
            color: '#033ee6',
            margin: '0'
          }}
        >
          {updatetime}
        </h1>
      </div>


    </div>
  );
}

export default App;
