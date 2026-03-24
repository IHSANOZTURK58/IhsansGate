import { Component } from '../Component.js';

export class ListeningGameView extends Component {
    render() {
        return `
            <div id="view-listening" class="view hidden"
                style="background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('assets/game-bg-geometric.png') no-repeat center center/cover;">
                
                <div class="audio-wave-container"
                    style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:100%; height:300px; z-index:0; pointer-events:none; opacity:0.1; display:flex; align-items:center; justify-content:center; gap:5px;">
                    <div class="wave-bar" style="width:4px; height:20px; background:var(--neon-blue); border-radius:10px; animation: pulseWave 1s infinite alternate;"></div>
                    <div class="wave-bar" style="width:4px; height:40px; background:var(--neon-blue); border-radius:10px; animation: pulseWave 1.2s infinite alternate;"></div>
                    <div class="wave-bar" style="width:4px; height:30px; background:var(--neon-purple); border-radius:10px; animation: pulseWave 0.8s infinite alternate;"></div>
                    <div class="wave-bar" style="width:4px; height:50px; background:var(--neon-blue); border-radius:10px; animation: pulseWave 1.5s infinite alternate;"></div>
                    <div class="wave-bar" style="width:4px; height:25px; background:var(--neon-blue); border-radius:10px; animation: pulseWave 1s infinite alternate;"></div>
                </div>

                <div class="listening-header" style="z-index: 10;">
                    <button class="btn-icon back-btn-top" onclick="app.openReadingListeningModes()">
                        &larr;
                    </button>
                    <select id="voice-select" class="voice-select hidden" onchange="app.setVoice(this.value)">
                    </select>
                </div>

                <div class="listening-container">
                    <div class="visualizer-container">
                        <div class="audio-wave">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>

                    <div class="playback-controls">
                        <button id="btn-listen-slow" class="btn-round-icon" onclick="app.playSentence(0.7)" title="Yavaş Dinle (0.7x)">🐢</button>
                        <button id="btn-listen-normal" class="btn-round-large" onclick="app.playSentence(1)" title="Tekrar Dinle (1.0x)">▶</button>
                        <div class="voice-selector-wrapper" style="position: relative; margin-left: 5px; display: inline-block;">
                            <button class="btn-round-icon" title="Ses Ayarlar">⚙️</button>
                            <select id="listening-voice-select" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;">
                                <option value="">Yükleniyor...</option>
                            </select>
                        </div>
                    </div>

                    <div id="listening-sentence-display" class="sentence-display">
                        <!-- Words will be injected here -->
                    </div>

                    <div class="listening-input-area">
                        <input type="text" id="listening-input" class="landing-input" placeholder="Boşluğu doldur..." autocomplete="off">
                        <button id="btn-check-listening" class="btn btn-primary" onclick="app.checkListeningAnswer()">Kontrol Et</button>
                        <button id="btn-giveup-listening" class="btn btn-outline"
                            style="border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.6); color: white;"
                            onclick="app.giveUpListening()">Pes Et 🏳️</button>
                    </div>

                    <div id="listening-feedback" class="feedback-msg"></div>
                    <button id="btn-listening-next" class="btn btn-secondary hidden" onclick="app.nextListeningLevel()" style="margin-top:1rem;">
                        Sonraki Soru ➡
                    </button>
                </div>
            </div>
        `;
    }
}
