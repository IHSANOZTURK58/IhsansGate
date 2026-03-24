import { Component } from '../Component.js';

export class UtilityModals extends Component {
    render() {
        return `
            <!-- PASSWORD MODAL -->
            <div id="view-password-modal" class="modal-overlay hidden">
                <div class="modal-content">
                    <p id="password-modal-msg" style="margin-bottom:1rem">Parola:</p>
                    <input type="password" id="reset-password-input" class="password-input"
                        style="width:100%; padding:0.8rem; margin-bottom:1rem; background:rgba(255,255,255,0.1); border:1px solid #555; color:white; text-align:center">
                    <div style="display:flex; gap:1rem; justify-content:center">
                        <button class="btn btn-secondary" onclick="app.closePasswordModal()">İptal</button>
                        <button class="btn btn-primary" onclick="app.submitPassword()">Onayla</button>
                    </div>
                </div>
            </div>

            <!-- LOGOUT CONFIRMATION MODAL -->
            <div id="logout-confirmation-modal" class="modal-overlay hidden">
                <div class="modal-content">
                    <h3 style="margin-bottom:1.5rem; color:var(--text-primary)">Çıkış Yap</h3>
                    <p style="margin-bottom:2rem; color:var(--text-secondary)">Çıkış yapmak istediğinizden emin misiniz?</p>
                    <div style="display:flex; gap:1rem; justify-content:center">
                        <button class="btn btn-secondary" onclick="app.closeLogoutModal()">İptal</button>
                        <button class="btn btn-primary" onclick="app.confirmLogout()">Çıkış Yap</button>
                    </div>
                </div>
            </div>

            <!-- DICTIONARY TOAST -->
            <div id="dict-toast" class="dict-toast">
                <div class="dict-content">
                    <div class="dict-header">
                        <span id="dict-word" class="dict-word">Kelime</span>
                        <span id="dict-level" class="dict-level">A1</span>
                    </div>
                    <div id="dict-meaning" class="dict-meaning">Anlam burada görünecek</div>
                </div>
                <div class="dict-actions">
                    <button id="dict-star-btn" class="btn-dict-star" onclick="app.toggleDictToastFavorite()" title="Favorilere Ekle">
                        <svg viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }
}
