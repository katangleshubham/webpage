import React from 'react'
//import { BrowserRouter as Router } from 'react-router-dom'
 


const Home = ()=> {
    
  return (
           
    <> 
       <header>
           <div id="header1"  className="container-fluid" >
                <div className="box">
                    <img  className="img-fluid " src="../img/bgpic.jpg" alt="coding"/>
                  <div className="formidt">
                    <form  className="form ">
                        <h1 id="displayText1"  className="">CODING WORLD</h1>
                        <input className="form-control " type="search" placeholder="Explore Our New World Answer Our Questions" aria-label="Search"/>
                        </form>
                   </div>
     
                </div>
            </div>
           
       </header>
        <main>
        <div id="cont1" className="container">
           <div className="row">
               <div id="col-3" className="col-3">
                 <h3 className="text1">Challenge Ends In</h3>
                 <p className="para1 ">25k Kids Participated so far<br>
                 </br>
               Time is running out, Participate Soon !</p>
               </div>
               <div className="col-9">
                  <div className="cdtime">
                      <p className="timeRow"><span className="timeHd">6</span> Hour</p>
                      <p></p>
                  </div>
                  <div className="cdtime">
                      <p className="timeRow"><span className="timeHd">16</span> Minutes</p>
                      <p></p>
                  </div>
                  <div className="cdtime">
                      <p className="timeRow"><span className="timeHd">36</span> Seconds</p>
                      <p></p>
                  </div>
                   <div id="cdtime">
                   <button id="cdtime2" type="button" className="btn btn-outline-warning">Resume Quiz</button>
                   </div>
               
               </div>
           </div>
        </div>
        <div className="container-cards">
                 <div className="cont-hd">
                     <h1 id="heading2" className="text-center ms-auto ">Win Rare Rewards Weekly</h1>
                     <p id="para2" className="text-center ms-auto ">Score <b>10/10</b> and get a <b>Certificate, an Avatar and 200 Points</b> mentioned below</p>
                 </div>
                <div id="container-cards" className="row">
                <div className="col-lg-4 col-sm-4">
                    <img className="cardimg img rounded-circle"src="../img/cert.png" alt="Avatar"/>
                   
                    <h3 className="cardcontainer text-center ">Earn<br></br>Quick Master </h3>
                    
                </div>
                <div className="col-lg-4 col-sm-4">
                <img className="cardimg1 img "src="../img/profileimg.png" alt="Avatar"/>
                   
                    <h3 className="cardcontainer1 text-center">Unlock<br></br>Profile Picture</h3>
                       </div>
                <div className="col-lg-4 col-sm-4">
                <img className="cardimg2 img "src="../img/points.jpg" alt="Avatar"/>
                   
                    <h3 className="cardcontainer2  text-center ">Earn<br></br>200 Points</h3>
                   </div>
                </div>

          </div>
          <div className="new-cards">
          <div className="cont-hd">
                     <h1 id="heading2" className="text-center ms-auto ">How to Ace the Weekly Code Challenge</h1>
                     <p id="para2" className="text-center ms-auto ">3 Steps and 30 minutes is all you need to unlock rewards and explore the world every week</p>
                 </div>
          </div>

          
        </main>
        <main>
            
        </main>
      
        

    </> 
    )
}

export default Home
