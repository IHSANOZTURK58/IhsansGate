import { Component } from '../Component.js';

export class WritingModesView extends Component {
    render() {
        return `
            <div id="view-writing-modes" class="view hidden">
                <div class="modes-split-layout"
                    style="justify-content:center; align-items:center; flex-direction:column; padding-top:6rem;">

                    <div class="modes-header-group" style="text-align:center; margin-bottom:3rem;">
                        <button class="btn-icon back-btn-top" onclick="app.showDashboard()" title="Geri"
                            style="position:absolute; top:2rem; left:2rem;">
                            &larr;
                        </button>
                        <h1 style="font-size:2.5rem; color:var(--accent-gold);">Yazma Modu</h1>
                        <p style="color:var(--text-secondary);">Nasıl çalışmak istersin?</p>
                    </div>

                    <div class="mode-grid-compact"
                        style="display:flex; gap:1.5rem; justify-content:center; flex-direction:column; width:100%; align-items:center;">
                        <!-- Scramble Mode -->
                        <div class="mode-card compact" onclick="app.startWritingMode()"
                            style="width:100%; max-width:350px; text-align:center; display:block; padding:2rem;">
                            <div class="mode-icon" style="font-size:3rem; margin-bottom:1rem;">🧩</div>
                            <div class="mode-info">
                                <h3>Harf Birleştirme</h3>
                                <p>Karışık harflerden doğru kelimeyi bul.</p>
                            </div>
                        </div>

                        <!-- AI Teacher Mode -->
                        <div class="mode-card compact highlight-border" onclick="GeminiTeacher.init()"
                            style="width:100%; max-width:350px; text-align:center; display:block; padding:2rem; border:1px solid var(--neon-purple); box-shadow:0 0 15px rgba(139, 92, 246, 0.3);">
                            <div class="mode-icon" style="font-size:3rem; margin-bottom:1rem;">🤖</div>
                            <div class="mode-info">
                                <h3>AI Öğretmen</h3>
                                <p>Yapay zeka ile cümle çevirisi yap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
