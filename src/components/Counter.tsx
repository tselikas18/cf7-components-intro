import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter =() => {
    const [count, setCount] = useState(0);

    const increaseCount =() => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="space-y-8 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    {/*<button className="bg-black text-white py-2 px-4"*/}
                    {/*        onClick={increaseCount}*/}
                    {/*>*/}
                    {/*    Increase*/}
                    {/*</button>*/}
                    {/*<button className="bg-red-400 disabled:bg-gray-600 text-white py-2 px-4"*/}
                    {/*        onClick={resetCount}*/}
                    {/*        disabled={count === 0}*/}
                    {/*>*/}
                    {/*    Reset*/}
                    {/*</button>*/}
                    {/*<button className="bg-blue-400 disabled:bg-gray-600 text-white py-2 px-4"*/}
                    {/*        onClick={decreaseCount}*/}
                    {/*        disabled={count === 0}*/}
                    {/*>*/}
                    {/*    Decrease*/}
                    {/*</button>*/}
                    <CounterButton onClick={increaseCount} label="increase" />
                    <CounterButton onClick={resetCount} disabled={count === 0} label="reset" addClass="bg-cf-dark-red"/>
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label="decrease" addClass="bg-blue-400"/>

                </div>
            </div>
        </>
    )
}

export default Counter;