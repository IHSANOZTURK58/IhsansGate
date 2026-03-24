import { Component } from '../Component.js';

export class ScenariosView extends Component {
    render() {
        return `
            <div id="view-scenarios" class="view hidden">
                <div class="modes-header-group"
                    style="display: flex; align-items: center; justify-content: space-between; padding: 2rem 1.5rem; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(15px); margin-bottom: 1.5rem;">
                    <button class="btn-icon back-btn-top" onclick="app.openReadingListeningModes()" title="Geri"
                        style="font-size: 1.8rem; background: rgba(255,255,255,0.15); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255,255,255,0.3); transition: all 0.3s; color: white;">
                        &larr;
                    </button>
                    <p style="color:var(--text-primary); margin: 0; font-size: 1.1rem; font-weight: 800; letter-spacing: 0.5px; text-align: right; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Gerçek hayat diyaloglarını dinle.</p>
                </div>
                <div class="scenario-grid" id="scenario-list-container"
                    style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; padding:0 1rem; max-width:1200px; margin:0 auto; padding-bottom: 2rem;">
                    <!-- Injected via JS -->
                </div>
            </div>
        `;
    }
}
