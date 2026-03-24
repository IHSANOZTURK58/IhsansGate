import { Component } from '../Component.js';

export class GameOverModal extends Component {
    render() {
        return `
            <div id="view-gameover" class="modal-overlay hidden">
                <div class="modal-content">
                    <h3 style="margin-bottom:1rem; color:#ef4444; font-size:2rem">💔 Oyun Bitti</h3>
                    <p style="margin-bottom:2rem; color:var(--text-secondary); font-size:1.1rem">Maalesef yandınız!</p>
                    <div style="display:flex; gap:1rem; justify-content:center">
                        <button class="btn btn-secondary" onclick="app.exitToLevelMap()">Çıkış Yap</button>
                        <button class="btn btn-primary" onclick="app.retryAdventure()">Tekrar Dene</button>
                    </div>
                </div>
            </div>
        `;
    }
}
