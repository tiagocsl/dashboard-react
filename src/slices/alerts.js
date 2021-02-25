import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
    alerts: []
};

const slice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        getAlerts(state, action) {
            const { alerts } = action.payload;

            state.alerts = alerts;
        }
    }
});

export const reducer = slice.reducer;

export const getAlerts = () => async(dispatch) => {
    const response = await axios.get('/api/alerts');

    dispatch(slice.actions.getAlerts(response.data));
};

export default slice;