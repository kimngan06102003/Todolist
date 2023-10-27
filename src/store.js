import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./reducers/Slice"

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})