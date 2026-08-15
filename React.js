import { App } from "./App";
import React from './React'
import { render } from "./ReactDom";

const root = document.getElementById('root')

function createElement(type, props, ...children) {
    const reactElement = {
        type,
        props: { ...props }
    }

    if (children) reactElement.props.children = children

    return reactElement;
}


let state;
export const useState = (initialValue) => {
    if (state) {
        state = state;
    } else {
        state = initialValue
    }

    const setState = (newValue) => {
        state = newValue;
        render(<App />, root);
    }

    return [state, setState];
}

export default {
    createElement,
}