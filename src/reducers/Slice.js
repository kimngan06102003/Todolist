import {createSlice} from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'task',
    initialState: 
    {
      list: [],
    },
    reducers: 
    {
      Them: (state, action) => {
        state.list = state.list.concat(action.payload) // type, payload
      },
      Xoa: (state, action) => {
        state.list = state.list.filter(function (task) {
          return task !== action.payload;
        })
      },
    },
})

export const { Them, Xoa } = Slice.actions

export default Slice.reducer