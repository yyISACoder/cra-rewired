import { useAppSelector, useAppDispatch } from '@/store';
import { testAsyncThunk } from '@/async-thunks/test';
import { decrement, increment } from '@/store/slice/test';

function Test() {
  const count = useAppSelector(state => state.test.value);
  const dispatch = useAppDispatch();

  const sendRequest = async () => {
    await dispatch(testAsyncThunk()).unwrap();
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        color: 'red',
      }}
    >
      {count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button onClick={sendRequest}>send request</button>
    </div>
  );
}

export default Test;
