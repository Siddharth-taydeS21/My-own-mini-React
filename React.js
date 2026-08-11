function createElement(type, props, ...children) {
    const reactElement = {
        type,
        props: {...props}
    }

    if (children) reactElement.props.children = children

    return reactElement;
}

export default {
    createElement,
}