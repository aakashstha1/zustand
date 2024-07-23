import useCounter from "../store/useCounter";


const ManageCounter = () => {
  const incrementCount = useCounter((state) => state.handleIncrementCount);
  return <button onClick={incrementCount}>Handle Counter Value</button>;
};

export default ManageCounter;
