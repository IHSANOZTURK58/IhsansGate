import { Component } from '../Component.js';
import { ModuleCard } from '../components/ModuleCard.js';

export class DashboardView extends Component {
    render() {
        const cards = [
            { icon: '📚', title: 'Kelime Çalışması', description: 'Yeni kelimeler öğren ve pratik yap.', onClick: 'app.openModeSelection()', isHero: true },
            { icon: '🧠', title: 'Dil Bilgisi', description: 'Dil bilgisi kurallarını test et.', onClick: "app.openGrammarTopics('Mixed')", isHero: false },
            { icon: '📖🎧', title: 'Okuma & Dinleme', description: 'Hikayeler oku ve dinleme egzersizleri yap.', onClick: 'app.openReadingListeningModes()', isHero: true },
            { icon: '✍️', title: 'Yazma', description: 'Kelime ve cümle yazma becerilerini geliştir.', onClick: 'app.openWritingModes()', isHero: false }
        ];

        return `
            <div id="view-dashboard" class="view hidden">
                <div class="dashboard-hub">
                    <div class="hub-header">
                        <div class="dashboard-top-bar">
                            <div class="user-profile">
                                <div class="profile-avatar-container" onclick="app.toggleProfileMenu()">
                                    <img id="header-avatar" src="assets/avatars/avatar_1.png" class="header-avatar-img"
                                        style="width:24px; height:24px; border-radius:50%; display:none;">
                                    <span class="user-name" id="display-user-name-header">Misafir</span>
                                    <span class="dropdown-arrow">▼</span>
                                </div>
                                <div class="profile-dropdown hidden" id="profile-dropdown">
                                    <button class="profile-menu-item"
                                        onclick="app.logout(); event.stopPropagation();">🚪 Çıkış</button>
                                </div>
                            </div>
                            <div class="logo">
                                <div class="logo-row">
                                    <span class="logo-icon">🔥</span>
                                    <h1>English<span class="highlight">Gate</span></h1>
                                </div>
                            </div>
                            <button class="btn-icon trophy-btn" onclick="app.openGlobalLeaderboard()"
                                title="Global Sıralama">
                                <span class="trophy-icon">🏆</span>
                                <span id="header-total-score">0</span>
                            </button>
                        </div>
                        <div class="hub-welcome">
                            <h3>👋 Hoş geldin, <span id="display-user-name-welcome">Oyuncu</span></h3>
                            <p class="quote-day">"Her yeni kelime, yeni bir dünyadır."</p>
                        </div>
                    </div>
                    <div class="dashboard-content">
                        <div class="modules-grid">
                            ${cards.map(card => new ModuleCard(card).render()).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
