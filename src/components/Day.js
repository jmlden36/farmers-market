import React from "react";
import PropTypes from "prop-types";

function Day(props){
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
  
  // return(
  //   <React.Fragment>
  //     <div>
  //       <p>${marketSchedule[props.index].day}<br> ${marketSchedule[props.index].location}<br> ${marketSchedule[props.index].hours}<br> ${marketSchedule[props.index].booth}</p>
  //     </div>
  //   </React.Fragment>
  // );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
  index: PropTypes.number,
};

export default Day;
