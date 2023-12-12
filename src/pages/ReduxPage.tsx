import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../store/counterSlice";
import Counter from "../components/Counter";
import { useGetPostsQuery } from "../store/postsApi";

export default function ReduxPage() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetPostsQuery({});

  if (isLoading) {
    return <>loading..</>;
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <button onClick={() => dispatch(clear())}>clear</button>

      <Counter />

      <div>{data && JSON.stringify(data)}</div>
    </div>
  );
}
