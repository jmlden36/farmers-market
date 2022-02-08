import React from "react";
import Day from "react";

class DayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayVisibleOnPage: 0
    };
  }
  handleClickDayNext = () => {
    this.setState(prevState => ({
      dayVisibleOnPage: prevState.dayVisibleOnPage + 1
    }));
  }
  handleClickDayPrev = () => {
    this.setState(prevState => ({
      dayVisibleOnPage: prevState.dayVisibleOnPage - 1
    }));
  }
  render(){
    
    let currentlyVisibleState = null;
    const index = this.state.dayVisibleOnPage
    currentlyVisibleState = <Day />
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <div>       
        <button onClick={this.handleClickDayPrev}>Previous Day</button> { /* new code */ }
        <button onClick={this.handleClickDayNext}>Next Day</button> { /* new code */ }
        </div>
      </React.Fragment>
    );
  }
}

export default DayControl; 
