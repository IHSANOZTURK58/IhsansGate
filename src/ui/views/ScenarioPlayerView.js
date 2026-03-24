import { Component } from '../Component.js';

export class ScenarioPlayerView extends Component {
    render() {
        return `
            <div id="view-scenario-player" class="view hidden">
                <div class="modes-header-group"
                    style="display: flex; align-items: center; justify-content: space-between; padding: 2rem 1.5rem; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(15px); margin-bottom: 1.5rem;">
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <button class="btn-icon back-btn-top" onclick="app.initScenarioMode()" title="Geri"
                            style="font-size: 1.8rem; background: rgba(255,255,255,0.15); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255,255,255,0.3); transition: all 0.3s; color: white;">
                            &larr;
                        </button>
                        <h3 id="scenario-player-title"
                            style="margin:0; font-size:1.2rem; color:var(--accent-gold); font-weight: 800;">
                            Başlık</h3>
                    </div>
                    <p style="color:var(--text-primary); margin: 0; font-size: 1rem; font-weight: 800; letter-spacing: 0.5px; text-align: right; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                        Gerçek hayat diyaloglarını dinle.</p>
                </div>

                <div class="scenario-player-container"
                    style="max-width:800px; margin:0 auto; padding:1rem; padding-bottom:100px;">
                    <div id="scenario-dialogue-area" style="display:flex; flex-direction:column; gap:1rem;">
                        <!-- Bubbles injected via JS -->
                    </div>
                </div>

                <div class="scenario-controls"
                    style="position:fixed; bottom:0; left:0; width:100%; background:rgba(30, 41, 59, 0.95); backdrop-filter:blur(10px); padding:0.5rem 1rem; display:flex; justify-content:center; align-items:center; gap:0.8rem; border-top:1px solid rgba(255,255,255,0.1); z-index:100; flex-wrap: wrap;">

                    <button class="btn-round-icon" onclick="app.restartScenario()" title="Başa Dön">⏮️</button>
                    <button class="btn-round-icon" onclick="app.prevScenarioStep()" title="Önceki Cümle">⏪</button>
                    <button id="btn-scenario-play" class="btn-round-large" onclick="app.toggleScenarioPlay()"
                        title="Oynat/Durdur" style="width:60px; height:60px; font-size:1.5rem;">▶</button>
                    <button class="btn-round-icon" onclick="app.nextScenarioStep()" title="Sonraki Cümle">⏩</button>
                    <button class="btn-round-icon" onclick="app.toggleScenarioTranslation()" title="Çevirileri Göster/Gizle">🇹🇷</button>
                </div>
            </div>
        `;
    }
}
