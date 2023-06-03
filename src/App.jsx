import React from "react";
import Heading from "./Heading";
import List from "./List";
import Para from "./Para";
import fname ,{lname,address} from "./Fav";
import add ,{sub,mul,div} from "./Calculate";

function App(){
        return (
            <>
                <Heading />
                <List />
                <Para />
                <h1>{fname} {lname}</h1>
                <h2>{address()}</h2>
                <h1>Sum of two number :{add()}</h1>
                <h1>Subtract of two number :{sub()}</h1>
                <h1>Multiply of two number :{mul()}</h1>
                <h1>Divide of two number :{div().toFixed(2)}</h1>
            </>
        )
}
export default App;