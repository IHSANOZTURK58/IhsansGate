import { Component } from '../Component.js';

export class WritingGameView extends Component {
    render() {
        return `
            <div id="view-writing" class="view hidden" style="padding-top: 6rem; overflow-y: auto; display: block; height: auto; min-height: 100%;">
                <div class="game-header-bar">
                    <button class="btn-icon back-btn-top" onclick="app.goBackFromWriting()" title="Geri">&larr;</button>
                    <div id="writing-score-container" style="font-size:1.2rem; font-weight:bold; margin-top:-10px; margin-right:20px;">
                        Puan: <span id="writing-score" style="color:var(--neon-blue)">0</span>
                    </div>
                </div>

                <div class="game-card" style="justify-content:center; gap:1.5rem; height: auto; padding-bottom: 2rem; margin-bottom: 1rem;">
                    <div style="text-align:center;">
                        <span style="font-size:0.9rem; opacity:0.7; display:block; margin-bottom:0.5rem">Bu kelimenin İngilizcesi ne?</span>
                        <h2 id="writing-target-meaning" style="font-size:clamp(1.4rem, 4vw, 2.2rem); line-height:1.4; color:var(--accent-gold); text-shadow:0 0 10px rgba(245,158,11,0.5)">
                            Elma
                        </h2>
                        <button class="btn-star" onclick="app.speakCurrentWord()" title="Dinle"
                            style="font-size:1.2rem; display:inline-flex; justify-content:center; align-items:center; margin-top:0.5rem;">
                            🔊
                        </button>
                    </div>

                    <div id="writing-slots" style="display:flex; justify-content:center; gap:0.5rem; flex-wrap:wrap; min-height:60px;">
                        <!-- Generated via JS -->
                    </div>

                    <div id="writing-pool" style="display:flex; justify-content:center; gap:0.5rem; flex-wrap:wrap; margin-top:1rem;">
                        <!-- Generated via JS -->
                    </div>
                </div>

                <div id="writing-feedback-container" style="text-align:center; min-height:4rem; margin: 1rem 0;">
                    <div id="writing-feedback" style="font-weight:bold; color:var(--text-primary);"></div>
                </div>

                <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; padding-bottom: 4rem;">
                    <button id="btn-scramble-clear" class="btn btn-secondary" onclick="app.clearWritingSlots()">TEMİZLE 🧹</button>
                    <button id="btn-scramble-giveup" class="btn btn-outline"
                        style="border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.6); color: white;"
                        onclick="app.giveUpWritingScramble()">PES ET 🏳️</button>
                    <button id="btn-scramble-check" class="btn btn-primary" onclick="app.checkWritingAnswer()">KONTROL ET ✅</button>
                    <button id="btn-scramble-next" class="btn btn-primary hidden" onclick="app.nextWritingQuestion()" style="min-width: 200px; padding: 1.2rem; font-size: 1.2rem;">DEVAM ET ➡</button>
                </div>
            </div>
        `;
    }
}
