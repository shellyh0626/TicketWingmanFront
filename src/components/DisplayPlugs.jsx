import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DisplayPlugs() {
    const foundPlugs = useSelector((state) => state.plugs.plugsType);
    // const dispatch = useDispatch();

    return (
        <div>
            {foundPlugs.length !== 0 ? (
                <div>
                    <p>Frequency: {foundPlugs[0].frequency.hertz}{foundPlugs[0].frequency.unit}</p>
                    {foundPlugs[0].voltage.volt.map((data, i) => {
                        return (
                            <div key={i}>
                                <p>Voltage: {data}V</p>
                            </div>
                        );
                    })}
                    {foundPlugs[0].plugs.map((data, i) => {
                        return (
                            <div key={i}>
                                <h3>Type: {data.type}</h3>
                                <img style={{ width: 50, height: 100 }} src={data.img}></img>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h1>Loading......</h1>
            )}
        </div>
    );
}

export default DisplayPlugs;