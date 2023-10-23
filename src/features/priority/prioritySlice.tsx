import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialPriority: string = 'All';

export const prioritySlice = createSlice({
  name: 'priority',
  initialState: {
    curentPriority: initialPriority,
  },
  reducers: {
    selectPriority: (state, action: PayloadAction<string>) => {
      if (action.payload !== state.curentPriority) {
        state.curentPriority = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectPriority } = prioritySlice.actions;

export default prioritySlice.reducer;
