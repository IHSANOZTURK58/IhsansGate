export class Router {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.views = {};
        this.currentViewId = null;
    }

    /**
     * Register a view component.
     * @param {string} id 
     * @param {Component} component 
     */
    register(id, component) {
        this.views[id] = component;
    }

    /**
     * Switch to a specific view.
     * @param {string} id 
     */
    navigate(id) {
        if (!this.views[id]) {
            console.error(`View ${id} not found.`);
            return;
        }

        // Hide current views
        document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
        
        // Show target view
        const targetView = document.getElementById(`view-${id}`);
        if (targetView) {
            targetView.classList.remove('hidden');
        } else {
            console.warn(`Fallback: view-${id} element not in DOM, mounting component.`);
            // This is where we'd mount if we were fully dynamic, 
            // but for now we're just managing visibility.
        }
        
        this.currentViewId = id;
    }
}
