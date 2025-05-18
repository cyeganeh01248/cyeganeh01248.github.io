import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
    let [count, setCount] = createSignal(0);
    return (
        <div>
            <p>Count is {count()}</p>
            <button onClick={() => setCount(count() + 1)}>Increment</button>
            <button onClick={() => setCount(count() - 1)}>Decrement</button>
        </div>
    );
}
