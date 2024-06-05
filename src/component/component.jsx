
import useStore from "../store/store";
const Counter =() => {
    const { count, increase, decrease } = useStore();

    return (
        <div>
            <h1>Count</h1>
            <buutton onClick = {increase}>증가</buutton>
            <buutton onClick = {decrease}>감소</buutton>

        </div>
    )
}

export default Counter