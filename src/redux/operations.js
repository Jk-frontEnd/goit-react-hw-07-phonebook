import axios from 'axios';
import {createAsyncThunk} from 'thunk';

axios.defaults.baseURL = 'https://65f9c3433909a9a65b194fe3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
