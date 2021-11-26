import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {addCountAC, addNameAC, countReducer, showNameAC} from "./countReducer";

export const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector<AppRootStateType, countReducer>(state => state.count)


    let localName = '';

    const inputName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addNameAC(e.target.value))
    }
    const addName = () => {
        dispatch(showNameAC)
    }



    return (<div>
        <div>{state.count}</div>
        <button onClick={() => dispatch(addCountAC())}>add</button>
        <hr/>
        <input onChange={inputName} type="text"/>
        <div>{localName}</div>
        <button onClick={addName}>ppp</button>
    </div>)
}