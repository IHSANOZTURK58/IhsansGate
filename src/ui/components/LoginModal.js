import { Component } from '../Component.js';

export class LoginModal extends Component {
    render() {
        return `
            <div id="view-login-modal" class="modal-overlay hidden" style="z-index: 2000;">
                <div class="modal-content" style="max-width:400px; padding:2rem;">
                    <button class="btn-icon" 
                        onclick="document.getElementById('view-login-modal').classList.add('hidden')"
                        style="position:absolute; top:1rem; right:1rem;">&times;</button>
                    
                    <div style="text-align:center; margin-bottom:1.5rem;">
                        <span style="font-size:3rem;">🔐</span>
                        <h2 id="auth-title" style="margin-top:0.5rem; color:white;">Hesap Girişi</h2>
                        <p id="auth-subtitle" style="color:var(--text-secondary);">Skorlarını kaydetmek ve sıralamaya girmek için giriş yap.</p>
                        <div id="auth-error-msg" style="color:#ef4444; margin-bottom:1rem; font-size:0.9rem; text-align:center;"></div>
                    </div>

                    <!-- Remembered Account View -->
                    <div id="remembered-account-view" class="hidden">
                        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:12px; margin-bottom:1.5rem; text-align:center; border:1px solid var(--border-glass);">
                            <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.3rem;">Kayıtlı Hesap:</div>
                            <div id="remembered-username-display" style="font-weight:bold; color:var(--accent-gold); font-size:1.1rem; word-break:break-all;">...</div>
                        </div>
                        <input type="password" id="rem-login-password" class="landing-input" placeholder="Şifrenizi girin" style="margin-bottom:1rem;">
                        <button class="btn btn-primary" onclick="app.submitLogin(true)" style="width:100%; padding:0.8rem;">Giriş Yap &rarr;</button>
                        <button class="btn btn-text" onclick="app.resetRememberedEmail()" style="width:100%; margin-top:1rem; font-size:0.8rem; opacity:0.7;">Başka bir hesapla giriş yap</button>
                    </div>

                    <!-- Standard Auth View -->
                    <div id="standard-auth-view">
                        <!-- Tabs -->
                        <div id="auth-tabs" style="display:flex; justify-content:center; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border-glass); padding-bottom:0.5rem;">
                            <button id="tab-login" class="btn-text active" onclick="app.switchAuthTab('login')" style="color:var(--accent-gold); font-weight:bold; border-bottom:2px solid var(--accent-gold);">Giriş Yap</button>
                            <button id="tab-register" class="btn-text" onclick="app.switchAuthTab('register')" style="color:var(--text-secondary);">Kayıt Ol</button>
                        </div>

                        <!-- Login Form -->
                        <div id="form-login">
                            <input type="text" id="login-username" class="landing-input" placeholder="Kullanıcı Adı" style="margin-bottom:1rem;" autocomplete="username">
                            <input type="password" id="login-password" class="landing-input" placeholder="Şifre" style="margin-bottom:1rem;" autocomplete="current-password">
                            <button class="btn btn-primary" onclick="app.submitLogin()" style="width:100%; padding:0.8rem;">Giriş Yap &rarr;</button>
                        </div>

                        <!-- Register Form -->
                        <div id="form-register" class="hidden">
                            <input type="text" id="reg-username" class="landing-input" placeholder="Kullanıcı Adı (Görünecek Ad)" style="margin-bottom:1rem;" autocomplete="username">
                            <input type="password" id="reg-password" class="landing-input" placeholder="Şifre (En az 6 karakter)" style="margin-bottom:1rem;" autocomplete="new-password">
                            <button class="btn btn-primary" onclick="app.submitRegister()" style="width:100%; padding:0.8rem;">Kayıt Ol &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
