export default (state = {}, action) => {
  const {dayVisibleOnPage, monthVisibleOnPage} = action;
  switch (action.type) {
    case 'NEXT_DAY':
      const newDay = dayVisibleOnPage + 1;
      return Object.assign({}, state, {
        dayVisibleOnPage: newDay
      });
    case 'PREV_DAY':
      const prevDay = dayVisibleOnPage - 1;
      return Object.assign({}, state, {
        dayVisibleOnPage: prevDay
      });
    case 'NEXT_MONTH':
      const nextMonth = monthVisibleOnPage + 1;
      return Object.assign({}, state, {
        monthVisibleOnPage: nextMonth
      });
    case 'PREV_MONTH':
      const prevMonth = monthVisibleOnPage - 1;
      return Object.assign({}, state, {
        monthVisibleOnPage: prevMonth
      });
      
    default:
      return state;
  }
};