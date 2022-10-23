import {createSlice} from '@reduxjs/toolkit';
import getMonth from '../../utils/getMonth';
import getYear from '../../utils/getYear';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    month: getMonth(),
    year: getYear(),
    selectedDate: {
      year: null,
      month: null,
      date: null,
    },
  },
  reducers: {
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export default calendarSlice.reducer;
export const {setMonth, setYear, setSelectedDate} = calendarSlice.actions;
