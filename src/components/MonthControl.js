import React from "react";
import Month from "./Month";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const availableProduce = [  
  {  
    month: "January",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
    ]
  },
  {  
    month: "February",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
    ]
  },
  {  
    month: "March",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
    ]
  },
  {  
    month: "April",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Garlic",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Potatoes"
    ]
  },
  {  
    month: "May",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Cauliflower",
        "Garlic",
        "Lettuce",
        "Potatoes",
        "Radishes"
    ]
  },
  {  
    month: "June",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Blackberries",
        "Cherries",
        "Raspberries",
        "Strawberries",
        "Asparagus",
        "Broccoli",
        "Cauliflower",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash"
    ]
  },
  {  
    month: "July",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Raspberries",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
    ]
  },
  {  
    month: "August",
    selection: [  
        "Apples",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Rhubarb",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
    ]
  },
  {  
    month: "September",
    selection: [  
        "Apples",
        "Blueberries",
        "Grapes",
        "Melons",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
    ]
  },
  {  
    month: "October",
    selection: [  
        "Apples",
        "Grapes",
        "Hazelnuts",
        "Melons",
        "Peaches",
        "Pears",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Pumpkins",
        "Radishes",
        "Squash",
        "Turnips"
    ]
  },
  {  
    month: "November",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Squash",
        "Turnips"
    ]
  },
  {  
    month: "December",
    selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
    ]
  }
];

class MonthControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthVisibleOnPage: 0
    };
  }
  handleClickMonthNext = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'NEXT_MONTH',
      monthVisibleOnPage: this.props.monthVisibleOnPage
    }
    dispatch(action);
  }
  handleClickMonthPrev = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'PREV_MONTH',
      monthVisibleOnPage: this.props.monthVisibleOnPage
    }
    dispatch(action);
  }

  resetMonth = () => {
    const { dispatch } = this.props;;
    const action = {
      type: 'RESET_MONTH',
      monthVisibleOnPage: this.props.monthVisibleOnPage
    }
    dispatch(action);
  }
  
  render(){
    
    let currentlyVisibleState = null;
    let index = this.props.monthVisibleOnPage
    currentlyVisibleState = <Month month={availableProduce[index].month}
    selection={availableProduce[index].selection}
    />
    return ( 
      <React.Fragment>
        <div id="month-box">  
        <h4 style={{fontSize:"1.25rem"}}>Seasonal Produce Offerings</h4> 
        {currentlyVisibleState}
      
        {/* {index===0 ?  <button inactive>Previous Month</button>  : <button onClick={this.handleClickMonthPrev}>Previous Month</button> } */}
    
        {index===11 ? <button onClick={this.resetMonth}>Next</button> : <button onClick={this.handleClickMonthNext}>Next Month</button> }
        
        </div>
      </React.Fragment>
    );
  }
}

MonthControl.propTypes = {
  monthVisibleOnPage: PropTypes.number
}

const mapStateToProps = state => {
  return {
    monthVisibleOnPage: state.monthVisibleOnPage
  }
}
MonthControl = connect(mapStateToProps)(MonthControl);

export default MonthControl; 
