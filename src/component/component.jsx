
import useStore from "../store/store";
const Counter =() => {
    const { count, increase, decrease } = useStore();

    return (
        <div>
            <h1>Count</h1>
            <button onClick = {increase}>증가</button>
            <button onClick = {decrease}>감소</button>

        </div>
    )
}

export default Counter