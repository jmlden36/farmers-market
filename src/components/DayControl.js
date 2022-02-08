import React from "react";

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
    let currentlyVisibleState = null;
    const index = this.state.dayVisibleOnPage
    // currentlyVisibleState = `<div><p>${marketSchedule[index].day}<br> ${marketSchedule[index].location}<br> ${marketSchedule[index].hours}<br> ${marketSchedule[index].booth}</p></div>`
    currentlyVisibleDay = marketSchedule[index].day
    currentlyVisibleLocation = marketSchedule[index].location
    currentlyVisibleHours = marketSchedule[index].hours
    currentlyVisibleBooth = marketSchedule[index].booth
    return ( 
      <React.Fragment>
        {currentlyVisibleDay}
        {currentlyVisibleLocation}
        {currentlyVisibleHours}
        {currentlyVisibleBooth}
        <div>
        <p>
        <button onClick={this.handleClickDayPrev}>Previous Day</button> { /* new code */ }
        <button onClick={this.handleClickDayNext}>Next Day</button> { /* new code */ }
        </div>
      </React.Fragment>
    );
  }
}

export default DayControl; 
