import { Component } from '../Component.js';

export class ModeSelectionView extends Component {
    render() {
        return `
            <div id="view-modes" class="view hidden" style="padding: 0;">
                <div class="modes-split-layout">
                    <div class="area-leaderboard">
                        <div class="leaderboard-card">
                            <div class="lb-header">
                                <h3>🏆 Liderlik Tablosu</h3>
                                <span class="badge-rush">Acele Modu</span>
                            </div>
                            <div class="table-wrapper">
                                <table class="lb-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Oyuncu</th>
                                            <th>Skor</th>
                                        </tr>
                                    </thead>
                                    <tbody id="leaderboard-body">
                                        <!-- JS Populated -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="area-modes">
                        <div class="modes-header-group">
                            <button class="btn-icon back-btn-top" onclick="app.showDashboard()" title="Geri">
                                &larr;
                            </button>
                            <h2>Oyun Modu</h2>
                        </div>
                        <p style="color:var(--text-secondary); margin-bottom:1rem; text-align:center;">Meydan okumanı seç.</p>

                        <div class="mode-grid-compact">
                            <div class="mode-card compact" onclick="app.showLevelMap()">
                                <div class="mode-icon">🏔️</div>
                                <div class="mode-info">
                                    <h3>Kelime Serüveni</h3>
                                    <p>100 farklı seviye ile kelime bilgini sına.</p>
                                </div>
                            </div>
                            <div class="mode-card compact" onclick="app.startGame('rush')">
                                <div class="mode-icon">⚡</div>
                                <div class="mode-info">
                                    <h3>Acele Modu</h3>
                                    <p>120 saniyede en fazla doğruyu yapmaya çalış.</p>
                                </div>
                            </div>
                            <div class="mode-card compact" onclick="app.startGame('favorites')">
                                <div class="mode-icon">⭐</div>
                                <div class="mode-info">
                                    <h3>Favoriler</h3>
                                    <p>Kaydettiğin zor kelimeleri tekrar et.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="area-footer">
                        <button class="btn btn-secondary"
                            style="width:100%; display:flex; justify-content:center; align-items:center; gap:0.5rem;"
                            onclick="app.showWordList()">
                            <span>📚</span> Tüm Kelimeler & Favoriler
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}
