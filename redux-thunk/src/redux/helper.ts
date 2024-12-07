import { AppThunk} from './store'; // Import your store types
import { isLoading, increment} from './slices/counterSlice';

export const incrementData = (): AppThunk => async (dispatch) => {
  dispatch(isLoading(true)); // Set loading to true

  try {
    //simulating api
    const dummyPromise = (shouldResolve: boolean): Promise<string> => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (shouldResolve) {
                console.log("resolved")
              resolve("Promise resolved successfully!");
            } else {
              reject("Promise rejected!");
            }
          }, 2000); // Simulates a 2-second delay
        });
      };
      
    await dummyPromise(true)
    dispatch(increment()); // Update state with fetched data
    dispatch(isLoading(false));
  } catch (error: any) {
    console.log(error)
  }
};
