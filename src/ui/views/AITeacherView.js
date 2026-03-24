import { Component } from '../Component.js';

export class AITeacherView extends Component {
    render() {
        return `
            <div id="view-ai-teacher" class="view hidden" style="padding:0; height:100vh; overflow:hidden;">
                <!-- 1. START SCREEN -->
                <div id="ai-start-screen" class="ai-overlay active"
                    style="position:absolute; inset:0; z-index:20; background: linear-gradient(rgba(15, 23, 42, 0.5), rgba(30, 41, 59, 0.7)), url('assets/library-bg.png') no-repeat center center/cover; display:flex; justify-content:center; align-items:center;">
                    
                    <div class="ai-bg-particles" style="position:absolute; inset:0; pointer-events:none; overflow:hidden;">
                        <div class="particle" style="position:absolute; width:4px; height:4px; background:rgba(255,255,255,0.4); border-radius:50%; top:20%; left:30%; animation: float 10s infinite;"></div>
                        <div class="particle" style="position:absolute; width:6px; height:6px; background:rgba(99, 102, 241, 0.4); border-radius:50%; top:60%; left:80%; animation: float 15s infinite reverse;"></div>
                    </div>

                    <div class="ai-content-center" style="text-align:center; color:white; padding:2rem; width:100%; max-width:500px; position:relative; z-index:2;">
                        <div class="ai-avatar-large" style="font-size:5rem; margin-bottom:1rem; animation: float 3s ease-in-out infinite; text-shadow: 0 0 20px rgba(255,255,255,0.3);">👨‍🏫</div>
                        <h1 style="font-size:2.5rem; margin-bottom:0.5rem; background: linear-gradient(to right, #c084fc, #818cf8); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 10px rgba(129, 140, 248, 0.3));">Özel Dil Öğretmeni</h1>
                        <p style="color:#e2e8f0; margin-bottom:2rem; font-size:1.1rem; font-weight:500; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Seviyeni seç ve sana özel hazırlanmış cümlelerle pratik yap.</p>

                        <div class="ai-start-mode-picker" style="margin-bottom:1.5rem; background:rgba(255, 255, 255, 0.1); backdrop-filter:blur(15px); padding:1.2rem; border-radius:24px; border:1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                            <label style="display:block; font-size:0.8rem; color:#cbd5e1; text-transform:uppercase; letter-spacing:1px; margin-bottom:1rem; font-weight:bold;">Çalışma Şekli</label>
                            <div class="ai-chip-grid" style="display:flex; gap:0.8rem; justify-content:center;">
                                <div class="ai-selection-chip active" data-value="EN_TR" onclick="GeminiTeacher.setStartMode('EN_TR', this)" style="flex:1; background:rgba(99, 102, 241, 0.4); border:2px solid #a5b4fc; padding:0.8rem; border-radius:16px; cursor:pointer; transition:all 0.3s; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);">
                                    <div style="font-size:1.5rem; margin-bottom:0.2rem;">🇬🇧</div>
                                    <div style="font-size:0.75rem; font-weight:bold; color:white;">EN &rarr; TR</div>
                                </div>
                                <div class="ai-selection-chip" data-value="TR_EN" onclick="GeminiTeacher.setStartMode('TR_EN', this)" style="flex:1; background:rgba(255,255,255,0.1); border:2px solid rgba(255,255,255,0.2); padding:0.8rem; border-radius:16px; cursor:pointer; transition:all 0.3s;">
                                    <div style="font-size:1.5rem; margin-bottom:0.2rem;">🇹🇷</div>
                                    <div style="font-size:0.75rem; font-weight:bold; color:rgba(255,255,255,0.7);">TR &rarr; EN</div>
                                </div>
                            </div>
                        </div>

                        <div class="ai-start-level-picker" style="margin-bottom:2rem; background:rgba(255, 255, 255, 0.1); backdrop-filter:blur(15px); padding:1.2rem; border-radius:32px; border:1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                            <label style="display:block; font-size:0.8rem; color:#cbd5e1; text-transform:uppercase; letter-spacing:1px; margin-bottom:1rem; font-weight:bold;">Öğrenme Seviyesi</label>
                            <div class="ai-chip-grid-scroll" style="display:grid; grid-template-columns: repeat(3, 1fr); gap:0.5rem;">
                                <div class="ai-level-chip active" data-value="Mixed" onclick="GeminiTeacher.setStartLevel('Mixed', this)" style="background:rgba(139, 92, 246, 0.4); border:2px solid #c084fc; padding:0.6rem; border-radius:16px; cursor:pointer; font-weight:bold; font-size:0.9rem; transition:all 0.3s; grid-column: span 3; margin-bottom:0.2rem; color:white; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">🌟 Karışık</div>
                                <div class="ai-level-chip" data-value="A1" onclick="GeminiTeacher.setStartLevel('A1', this)">A1</div>
                                <div class="ai-level-chip" data-value="A2" onclick="GeminiTeacher.setStartLevel('A2', this)">A2</div>
                                <div class="ai-level-chip" data-value="B1" onclick="GeminiTeacher.setStartLevel('B1', this)">B1</div>
                                <div class="ai-level-chip" data-value="B2" onclick="GeminiTeacher.setStartLevel('B2', this)">B2</div>
                                <div class="ai-level-chip" data-value="C1" onclick="GeminiTeacher.setStartLevel('C1', this)">C1</div>
                                <div class="ai-level-chip" data-value="C2" onclick="GeminiTeacher.setStartLevel('C2', this)">C2</div>
                            </div>
                        </div>

                        <button class="btn-ai-start" onclick="GeminiTeacher.startSession()" style="width:100%; background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color: white; border: none; padding: 1.2rem; font-size: 1.2rem; border-radius: 50px; cursor: pointer; box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); transition: transform 0.2s; font-weight:bold;">
                            <span>Derslere Başla 🚀</span>
                        </button>
                    </div>
                </div>

                <!-- 2. GAME INTERFACE -->
                <div id="ai-game-interface" class="ai-game-container hidden" style="height:100%; display:flex; flex-direction:column;">
                    <div class="ai-header" style="padding:1rem 1.5rem; display:flex; align-items:center; justify-content:space-between; background:rgba(15, 23, 42, 0.6); backdrop-filter:blur(10px); border-bottom:1px solid rgba(255,255,255,0.1);">
                        <button class="btn-icon-glass" onclick="app.openWritingModes()" style="background:rgba(255,255,255,0.1); border:none; color:white; width:36px; height:36px; border-radius:50%; cursor:pointer;">&larr;</button>
                        <div class="ai-status-pill" style="display:flex; align-items:center; gap:0.5rem; background:rgba(0,0,0,0.3); padding:0.4rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1);">
                            <span class="status-dot online" style="width:8px; height:8px; background:#4ade80; border-radius:50%; box-shadow:0 0 5px #4ade80;"></span>
                            <span id="ai-active-level-badge" style="font-size:0.9rem; color:var(--text-secondary); font-weight:bold;">-</span>
                        </div>
                        <div class="ai-mode-badge" style="background:rgba(139, 92, 246, 0.2); padding:0.4rem 0.8rem; border-radius:12px; border:1px solid rgba(139, 92, 246, 0.2); min-width:80px; text-align:center;">
                            <span id="ai-mode-text" style="font-weight:bold; font-size:0.85rem; color:#c4b5fd;">-</span>
                        </div>
                    </div>

                    <div class="flex-1-scroll" style="display:flex; justify-content:center; align-items:center; padding:1.5rem;">
                        <div class="ai-game-layout">
                            <div class="ai-main-column">
                                <div class="ai-card-glass" style="background:rgba(30, 41, 59, 0.7); backdrop-filter:blur(15px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:2.5rem; box-shadow:0 10px 30px rgba(0,0,0,0.3); text-align:center;">
                                    <div class="ai-question-area" style="margin-bottom:2.5rem;">
                                        <span class="label-sm" style="display:block; font-size:0.9rem; color:#94a3b8; margin-bottom:0.8rem; text-transform:uppercase; letter-spacing:1px;">Çevirmen gereken cümle:</span>
                                        <h2 id="ai-source-text" style="font-size:2rem; color:white; line-height:1.4; min-height:100px; display:flex; align-items:center; justify-content:center; margin:0;">Yükleniyor...</h2>
                                        <p id="ai-hint" style="color:#94a3b8; font-size:1rem; opacity:0; transition:opacity 0.3s; margin-top:1rem;">İpucu: ...</p>
                                    </div>
                                    <div class="ai-input-area" style="position:relative; margin-bottom:2rem;">
                                        <input type="text" id="ai-user-input" placeholder="Anlamını buraya yaz..." autocomplete="off" style="width:100%; padding:1.2rem 1.5rem; background:rgba(0,0,0,0.3); border:2px solid rgba(255,255,255,0.1); border-radius:20px; color:white; font-size:1.2rem; outline:none; text-align:center; transition:all 0.2s; box-shadow:inset 0 2px 10px rgba(0,0,0,0.2);" onkeydown="GeminiTeacher.handleInputKey(event)">
                                    </div>
                                    <div id="ai-feedback-text" class="feedback-message hidden" style="margin-bottom:1.5rem; min-height:2rem; font-size:1.1rem; font-weight:600; padding:0.8rem; border-radius:12px;"></div>
                                    <button id="btn-ai-show-explanation" class="hidden" onclick="GeminiTeacher.toggleExplanation(true)" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#a78bfa; padding:0.6rem 1.2rem; border-radius:12px; font-size:0.9rem; font-weight:bold; cursor:pointer; margin-bottom:1.5rem; transition:all 0.2s; display:inline-flex; align-items:center; gap:0.5rem; margin: 0 auto 1.5rem auto;">
                                        <span>Öğretmen Açıklaması 👨‍🏫</span>
                                        <span style="font-size:1rem;">▼</span>
                                    </button>
                                    <div class="ai-actions" style="display:flex; justify-content:center;">
                                        <button id="btn-ai-check" class="btn-ai-action primary" onclick="GeminiTeacher.checkAnswer()" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: black; border: none; padding: 1rem 3rem; font-size:1.1rem; border-radius: 50px; font-weight:bold; cursor:pointer; min-width:180px; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3); transition: transform 0.2s;">KONTROL ET</button>
                                        <button id="btn-ai-next" class="btn-ai-action secondary hidden" onclick="GeminiTeacher.nextQuestion()" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; border: none; padding: 1rem 3rem; font-size:1.1rem; border-radius: 50px; font-weight:bold; cursor:pointer; min-width:180px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); transition: transform 0.2s;">SONRAKİ CÜMLE &rarr;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="ai-rich-feedback" class="hidden">
                        <button class="btn-ai-close" onclick="GeminiTeacher.toggleExplanation(false)">&times;</button>
                        <div id="ai-teacher-note" style="margin-bottom:1.5rem;">
                            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.8rem;">
                                <span style="font-size:1.5rem;">👨‍🏫</span>
                                <span style="font-weight:bold; color:#a78bfa; font-size:1.1rem; text-transform:uppercase; letter-spacing:1px;">Öğretmenin Notu</span>
                            </div>
                            <p id="ai-grammar-tip" style="color:#f1f5f9; font-size:1.05rem; line-height:1.7; margin:0;"></p>
                            <p id="ai-warning-tip" class="hidden" style="color:#fbbf24; font-size:1rem; line-height:1.5; margin-top:1.2rem; padding:1.2rem; background:rgba(251,191,36,0.1); border-radius:12px; border:1px solid rgba(251,191,36,0.2);"></p>
                        </div>
                        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:1.2rem;">
                            <span style="display:block; font-size:0.85rem; color:#94a3b8; text-transform:uppercase; margin-bottom:1rem; letter-spacing:1.2px; font-weight:bold;">📚 Kelime Dağarcığı</span>
                            <div id="ai-vocab-tags" style="display:flex; flex-wrap:wrap; gap:0.6rem;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
