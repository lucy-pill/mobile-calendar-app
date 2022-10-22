import {createSlice} from '@reduxjs/toolkit';
import getMonth from '../../utils/getMonth';
import getYear from '../../utils/getYear';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    month: getMonth(),
    year: getYear(),
  },
  reducers: {
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export default calendarSlice.reducer;
