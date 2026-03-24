import { Component } from '../Component.js';

export class GrammarExplanationModal extends Component {
    render() {
        return `
            <div id="grammar-explanation-modal" class="modal-overlay hidden" style="z-index: 2000;">
                <div class="modal-content" style="max-width:800px; max-height:85vh; display:flex; flex-direction:column;">
                    <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">
                        <h2 id="explanation-title" style="margin:0; color:var(--accent-gold);">Konu Anlatımı</h2>
                        <button class="btn-icon" onclick="app.closeGrammarExplanation()" style="background:none; border:none; font-size:1.5rem;">&times;</button>
                    </div>
                    <div id="explanation-content" style="flex:1; overflow-y:auto; text-align:left; color:var(--text-secondary); line-height:1.6;">
                        <!-- Injected via JS -->
                    </div>
                    <div style="margin-top:1.5rem; text-align:center;">
                        <button class="btn btn-primary" onclick="app.closeGrammarExplanation()">Anladım 👍</button>
                    </div>
                </div>
            </div>
        `;
    }
}
