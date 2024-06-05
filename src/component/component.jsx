
import useStore from "../store/store";
const Counter =() => {
    const { count, increase, decrease } = useStore();

    return (
        <div>
            <h1>Count</h1>
            <buutton onClick = {increase}></buutton>

        </div>
    )
}

export default Counter