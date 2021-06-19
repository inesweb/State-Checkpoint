
import React, { Component } from 'react';
import photo from './photo.jpg';
import './App.css';


class App extends Component {
  state = {
    Person:{
    fullName : "ines zekri ",
    bio :"coding",
    imgSrc : photo,
    profession:"software engineer"
},
show :false,
seconds: 0

};

  
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };

    componentDidMount() {
 
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
      if(this.state.seconds< 1) { 
        clearInterval(this.intervalId);
      }
    
    }
    
    componentWillUnmount() {
      clearInterval(this.timer);
    }
    
    render(){
      return (
   <div className="App">
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
      <h1> {this.state.seconds}</h1>
       {this.state.show && (
         
       < >
           
            <h2> {this.state.Person.fullName}</h2> <br/>
            <h2>{this.state.Person.bio}</h2>
            <h2>{this.state.Person.profession}</h2>
           <img className ="imgsrc" src={this.state.Person.imgSrc} alt="photo"></img><br/>
           <br/>
           
           
   </>
       )}
       
        <button className ="btn" onClick={this.handleShowPerson}>show details</button>
     
   </div>
   );
   }
}

export default App;