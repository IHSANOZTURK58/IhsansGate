import { Component } from '../Component.js';

export class SurvivalGameOverView extends Component {
    render() {
        return `
            <div id="view-gameover" class="modal-overlay hidden">
                <div class="modal-content">
                    <h3 style="margin-bottom:1.5rem; color:#ef4444; font-size:2.5rem; text-shadow:0 0 20px rgba(239, 68, 68, 0.3);">Oyun Bitti!</h3>
                    
                    <div id="final-stats" style="margin-bottom:2rem; background:rgba(255,255,255,0.05); padding:1.5rem; border-radius:16px; border:1px solid var(--border-glass);">
                        <div style="font-size:1rem; color:var(--text-secondary); margin-bottom:0.5rem;">Toplam Puan</div>
                        <div id="final-score" style="font-size:3.5rem; font-weight:900; color:var(--accent-gold);">0</div>
                    </div>

                    <div class="earnings-report">
                        <!-- Wallet Earnings Removed -->
                    </div>

                    <div id="name-input-area" class="name-input-container hidden">
                        <!-- Name input placeholder -->
                    </div>

                    <div style="display:flex; gap:1rem; justify-content:center">
                        <button class="btn btn-secondary" onclick="app.handleGameOverExit()">Çıkış</button>
                        <button class="btn btn-primary" onclick="app.startGame()">Tekrar Oyna ↺</button>
                    </div>
                </div>
            </div>
        `;
    }
}
