import { Component } from '../Component.js';

export class GlobalLeaderboardView extends Component {
    render() {
        return `
            <div id="view-global-leaderboard" class="view hidden">
                <div class="global-leaderboard-header">
                    <button class="back-btn-top" onclick="app.showDashboard()" title="Geri">
                        <span class="back-icon">←</span>
                    </button>
                    <div class="header-content">
                        <h2 class="header-title">🏆 Global Sıralama</h2>
                        <p class="header-subtitle">En çok Kupaya Sahip Oyuncular</p>
                    </div>
                </div>

                <div class="global-leaderboard-container">
                    <div class="leaderboard-card-main">
                        <div class="table-header-row">
                            <span class="col-rank">#</span>
                            <span class="col-player">Oyuncu</span>
                            <span class="col-score">Kupa</span>
                        </div>
                        <ul id="global-leaderboard-list">
                            <li class="loading-state">Yükleniyor...</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}
