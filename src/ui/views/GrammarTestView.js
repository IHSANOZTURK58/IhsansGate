import { Component } from '../Component.js';

export class GrammarTestView extends Component {
    render() {
        return `
            <div id="view-grammar" class="view hidden">
                <div class="game-header-bar">
                    <button class="btn-icon back-btn-top" onclick="app.openGrammarTopics(app.state.grammarLevel)" title="Geri">&larr;</button>
                    <div class="grammar-progress" style="font-weight:bold;">Soru: <span id="grammar-current-index">1</span> / <span id="grammar-total-count">10</span></div>
                    <div id="grammar-topic" style="margin-left:1rem; color:var(--accent-gold);">Topic</div>
                </div>

                <div class="game-card">
                    <div id="grammar-question" style="font-size:1.4rem; line-height:1.6; margin-bottom:2rem; text-align:center;">Question?</div>
                    <div id="grammar-options" class="options-grid">
                        <!-- Options injected via JS -->
                    </div>
                    <div id="grammar-feedback-text" style="margin-top:1.5rem; text-align:center; min-height:1.5rem; font-weight:bold; font-size:1.2rem;"></div>
                    <div id="grammar-explanation" class="hidden" style="margin-top:1rem; padding:1.2rem; border-radius:12px; background:rgba(255,255,255,0.08); border-left:4px solid var(--neon-gold); font-size:0.95rem; color:var(--text-secondary); text-align:left; line-height:1.5;"></div>
                </div>

                <div style="margin-top:2rem; text-align:center;">
                    <button id="btn-grammar-next" class="btn btn-primary hidden" onclick="app.nextGrammarQuestion()">Sonraki Soru ➡</button>
                    <button id="btn-grammar-finish" class="btn btn-primary hidden" onclick="app.finishGrammarTest()">Testi Bitir ✅</button>
                </div>
            </div>
        `;
    }
}
