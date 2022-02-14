import dayReducer from '../../reducers/day-reducer';

describe('dayReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(dayReducer({}, {type: null })).toEqual({});
  });

  test('Should successfully advance the day from the current day', () => {
    expect(dayReducer({}, {type: 'NEXT_DAY', dayVisibleOnPage: 0})).toEqual({
      dayVisibleOnPage: 1
    });
  });

  test('Should successfully move to the previous day from the current day', () => {
    expect(dayReducer({}, {type: 'PREV_DAY', dayVisibleOnPage: 2})).toEqual({
      dayVisibleOnPage: 1
    });
  });

  test('Should advance to the next month from the current month', () => {
    expect(dayReducer({}, {type: 'NEXT_MONTH', monthVisibleOnPage: 0})).toEqual({
      monthVisibleOnPage: 1
    });
  });
  test('Should move to the previous month from the current month', () => {
    expect(dayReducer({}, {type: 'PREV_MONTH', monthVisibleOnPage: 2})).toEqual({
      monthVisibleOnPage: 1
    });
  });
});