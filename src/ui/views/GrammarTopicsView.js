import { Component } from '../Component.js';

export class GrammarTopicsView extends Component {
    render() {
        return `
            <div id="view-grammar-topics" class="view hidden">
                <div class="modes-header-group" style="padding:1.5rem;">
                    <button class="btn-icon back-btn-top" onclick="app.showDashboard()" title="Geri">
                        &larr;
                    </button>
                    <h2 id="grammar-topics-title">Topics</h2>
                </div>
                <div id="grammar-topics-container" class="topics-grid" style="padding:1rem; display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;">
                    <!-- Topics injected via JS -->
                </div>
            </div>
        `;
    }
}
