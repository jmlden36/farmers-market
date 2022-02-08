import React from "react";
import Day from "./Day";
const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

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
  resetDay = () => {
    this.setState(prevState => ({
      dayVisibleOnPage: 0
    }));
  }
  //lastDay = () => {
    //this.setState(prevState = ({
        //dayVisibleOnPage: 5
    //}))
  //}
  render(){
    
    let currentlyVisibleState = null;
    let index = this.state.dayVisibleOnPage
    currentlyVisibleState = <Day day={marketSchedule[index].day}
    location={marketSchedule[index].location}
    hours={marketSchedule[index].hours}
    booth={marketSchedule[index].booth}/>
    return ( 
      <React.Fragment>
        {currentlyVisibleState}
        <div>       
        {index===0 ?  <button inactive>Previous Day</button>  : <button onClick={this.handleClickDayPrev}>Previous Day</button> }
        {index===5 ? <button onClick={this.resetDay}>Next</button> : <button onClick={this.handleClickDayNext}>Next Day</button> }
        </div>
      </React.Fragment>
    );
  }
}

export default DayControl; 
