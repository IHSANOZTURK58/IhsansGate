import { Component } from '../Component.js';

export class VoiceSettingsModal extends Component {
    render() {
        return `
            <div id="view-voice-settings-modal" class="modal-overlay hidden"
                style="z-index: 2500; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal-content"
                    style="width: 100%; max-width:450px; max-height: 90vh; display: flex; flex-direction: column; padding:1.5rem; background:rgba(30, 41, 59, 0.95); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius: 16px;">
                    <div style="flex-shrink: 0; display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:1rem;">
                        <h3 style="margin:0; color:var(--accent-gold); display:flex; align-items:center; gap:0.5rem; font-size: 1.2rem;">
                            🗣️ AI Ses Seçimi</h3>
                        <button class="btn-icon" onclick="app.closeVoiceSettings()"
                            style="background:none; border:none; font-size:1.5rem; padding: 0.5rem;">&times;</button>
                    </div>

                    <p style="flex-shrink: 0; color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem; line-height: 1.4;">
                        Sana en uygun gelen eğitmen sesini seç.
                    </p>

                    <div id="voice-options-container" class="voice-options-grid"
                        style="flex-grow: 1; overflow-y:auto; display:grid; grid-template-columns: 1fr; gap:0.6rem; padding-right: 5px;">
                        <!-- JS injected voices -->
                    </div>

                    <div style="flex-shrink: 0; margin-top:1rem; text-align:center;">
                        <button class="btn btn-primary" onclick="app.closeVoiceSettings()"
                            style="width:100%; padding: 0.8rem;">Tamam 👍</button>
                    </div>
                </div>
            </div>
        `;
    }
}
