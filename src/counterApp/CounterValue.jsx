import useCounter from "../store/useCounter";

const CounterValue = () => {
  const count = useCounter((state) => state.count);
  return <div>Counter Value is {count}</div>;
};

export default CounterValue;
