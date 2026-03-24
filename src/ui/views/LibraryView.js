import { Component } from '../Component.js';

export class LibraryView extends Component {
    render() {
        return `
            <div id="view-reading-listening" class="view hidden"
                style="background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('assets/library-bg.png') no-repeat center center/cover;">
                <div class="modes-split-layout"
                    style="justify-content:flex-start; align-items:center; flex-direction:column; padding-top:2rem; padding-bottom: 2rem; overflow-y: auto;">

                    <div class="modes-header-group"
                        style="display:flex; flex-direction: column; align-items:center; justify-content:center; gap: 1rem; margin-bottom:2rem; width:100%; padding:0 1.5rem; position:relative;">

                        <!-- Top Row: Back & Voice Settings -->
                        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                            <button class="btn-icon back-btn-top" onclick="app.showDashboard()" title="Geri"
                                style="position:relative; margin:0; width: 45px; height: 45px; background: rgba(255,255,255,0.1); border-radius: 50%;">
                                &larr;
                            </button>
                            <button class="btn-icon" onclick="app.openVoiceSettings()" title="AI Ses Ayarları"
                                style="position:relative; background:rgba(255,255,255,0.15); width:45px; height:45px; border-radius:12px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.3); z-index:10; cursor:pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                                🗣️
                            </button>
                        </div>

                        <!-- Title (Center) -->
                        <div style="text-align:center; padding:0 1rem;">
                            <h2 style="font-size:1.8rem; margin:0; line-height:1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                                Okuma & Dinleme</h2>
                            <p style="color:var(--text-secondary); font-size:0.9rem; margin:0.5rem 0 0 0;">Çalışma modunu seç</p>
                        </div>
                    </div>

                    <div class="mode-grid-compact"
                        style="display:flex; gap:1rem; justify-content:center; flex-direction:column; width:90%; max-width:400px; align-items:center;">
                        <div class="mode-card compact" onclick="app.openReadingMode()"
                            style="width:100%; text-align:center; display:block; padding:1.2rem; border-radius:16px;">
                            <div class="mode-icon" style="font-size:2.5rem; margin-bottom:0.5rem;">📚</div>
                            <div class="mode-info">
                                <h3 style="font-size:1.2rem;">Kütüphane</h3>
                                <p style="display:block !important; color:#cbd5e1; margin-top:0.4rem; font-size:0.85rem;">Seviyene uygun İngilizce kitaplar oku.</p>
                            </div>
                        </div>

                        <div class="mode-card compact" onclick="app.initListeningMode()"
                            style="width:100%; text-align:center; display:block; padding:1.2rem; border-radius:16px;">
                            <div class="mode-icon" style="font-size:2.5rem; margin-bottom:0.5rem;">🎧</div>
                            <div class="mode-info">
                                <h3 style="font-size:1.2rem;">Dinleme Odası</h3>
                                <p style="display:block !important; color:#cbd5e1; margin-top:0.4rem; font-size:0.85rem;">Duyduğun cümleyi doğru şekilde yaz.</p>
                            </div>
                        </div>

                        <div class="mode-card compact" onclick="app.initScenarioMode()"
                            style="width:100%; text-align:center; display:block; padding:1.2rem; border-radius:16px;">
                            <div class="mode-icon" style="font-size:2.5rem; margin-bottom:0.5rem;">🗣️</div>
                            <div class="mode-info">
                                <h3 style="font-size:1.2rem;">Günlük Senaryolar</h3>
                                <p style="display:block !important; color:#cbd5e1; margin-top:0.4rem; font-size:0.85rem;">Gerçek hayat diyaloglarını dinle ve anla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
