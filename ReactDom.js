export function render(reactElement, rootElement) {
    function createDOMElement(reactElement) {
        // handled if the reactElement is an array of valid react Elements
        if (Array.isArray(reactElement)) {
            return reactElement.map(el => createDOMElement(el))
        }

        // handled if the reactElement is a functional component
        if (typeof reactElement.type === 'function') {
            // console.log(reactElement.props) // Allowed the access & use of props
            return createDOMElement(reactElement.type(reactElement.props))
        }

        // handled if the reactElement is a simple text of number
        if (typeof reactElement === 'string' || typeof reactElement === 'number') {
            return reactElement;
        }

        // handled the creation of actual DOM Element
        const { type, props } = reactElement
        const DOMElement = document.createElement(type);

        // handled the addition of attributes
        if (props) {
            Object.entries(props).forEach(([key, value]) => {
                // console.log(key, value
                if (key === 'style') {
                    // if props are not just normal attributes, but they are styles passed in a object
                    Object.entries(value).forEach(([style, value]) => DOMElement.style[style] = value);
                } else {
                    DOMElement[key] = value
                }
            })

            props.children?.forEach(child => {
                if (typeof child === 'string') { // if children is string 
                    DOMElement.append(document.createTextNode(child))
                } else if (Array.isArray(child)) { // if children is an array of react elements
                    child.forEach(item => DOMElement.append(createDOMElement(item)))
                } else { // if children is a valid react element 
                    DOMElement.append(createDOMElement(child))
                }
            })
        }

        return DOMElement
    }

    const DOMElement = createDOMElement(reactElement)
    // if the dom element is an array of dom elements 
    rootElement.innerHTML = '';
    if (Array.isArray(DOMElement)) {
        rootElement.append(...DOMElement)
    } else { // single dom element append
        rootElement.append(DOMElement)
    }
}