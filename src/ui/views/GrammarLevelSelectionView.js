import { Component } from '../Component.js';

export class GrammarLevelSelectionView extends Component {
    render() {
        return `
            <div id="view-grammar-intro" class="view hidden">
                <button class="btn-icon back-btn-top" onclick="app.showDashboard()" title="Geri"
                    style="position:fixed; top:1rem; left:1rem; z-index:100;">
                    &larr;
                </button>
                <div class="grammar-intro-content" style="padding-top:4rem; text-align:center;">
                    <h2 style="font-size:2rem; margin-bottom:2rem;">Dil Bilgisi (Grammar)</h2>
                    <div class="mode-grid-compact" style="display:flex; flex-direction:column; gap:1rem; align-items:center;">
                        <div class="mode-card compact" onclick="app.openGrammarTopics('A1')" style="width:100%; max-width:400px; padding:1.5rem;">
                            <h3>A1 - Başlangıç Seviyesi</h3>
                            <p>Temel zamanlar ve basit cümle yapıları.</p>
                        </div>
                        <div class="mode-card compact" onclick="app.openGrammarTopics('A2')" style="width:100%; max-width:400px; padding:1.5rem;">
                            <h3>A2 - Temel Seviye</h3>
                            <p>Bağlaçlar ve günlük ifadeler.</p>
                        </div>
                        <div class="mode-card compact" onclick="app.openGrammarTopics('B1')" style="width:100%; max-width:400px; padding:1.5rem;">
                            <h3>B1 - Orta Seviye</h3>
                            <p>Karmaşık zamanlar ve modal yapılar.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
