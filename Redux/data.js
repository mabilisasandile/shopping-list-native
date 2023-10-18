
import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import * as actionTypes from '../actions/actionTypes';
  

const initialState = {
	loading: false,
	error: null,
	data: [],
}

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		fetchDataStart(state) {
			state.loading = true;
			state.error = null;
		},

		fetchDataSuccess(state, action) {
			state.loading = false;
			state.data = action.payload;
		},

		fetchDataFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		}
	}
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export const fetchData = () => async (dispatch) => {
	dispatch(fetchDataStart())

	try {
		const querySnapShot = await getDocs(collection(db, "items"));
		const data = querySnapShot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}))
		dispatch(fetchDataSuccess(data)) //Dispatching fetched data to store
	} catch (error) {
		dispatch(fetchDataFailure(error));
		console.log(error);
	}
}

export default dataSlice.reducer;