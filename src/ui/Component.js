/**
 * Base Component class for UI elements.
 */
export class Component {
    constructor(props = {}) {
        this.props = props;
        this.element = null;
    }

    /**
     * Render the component's HTML.
     * @returns {string} HTML string.
     */
    render() {
        return '';
    }

    /**
     * Mount the component to a DOM element.
     * @param {HTMLElement} parent
     */
    mount(parent) {
        const div = document.createElement('div');
        div.innerHTML = this.render().trim();
        
        // Append all children (handles multiple root elements)
        const children = Array.from(div.childNodes);
        children.forEach(child => parent.appendChild(child));
        
        // For convenience, set this.element to the first element child if it exists
        this.element = children.find(node => node.nodeType === Node.ELEMENT_NODE) || children[0];
        
        this.afterMount();
    }

    /**
     * Logic to run after the component is mounted to the DOM.
     */
    afterMount() {}

    /**
     * Helper to query elements within this component.
     */
    $(selector) {
        return this.element ? this.element.querySelector(selector) : null;
    }
}
