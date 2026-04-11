import { Component } from '../Component.js';

export class LandingView extends Component {
    render() {
        return `
            <div id="view-landing" class="view active">
                <div class="landing-container">
                    <div class="landing-logo">
                        <span class="logo-icon-lg">🔥</span>
                        <h1>English<span class="highlight">Gate</span></h1>
                        <p class="subtitle">Your Professional English Learning Platform</p>
                    </div>

                    <div id="login-choices" class="landing-form">
                        <div class="login-choices">
                            <button class="btn btn-primary btn-large" onclick="app.enterDashboard()"
                                style="width:100%;">
                                👤 Kullanıcı Girişi
                            </button>
                            <button class="btn btn-secondary btn-large" style="margin-top: 1rem; width:100%;"
                                onclick="app.checkAdminAuth()">
                                🛡️ Yönetici Paneli
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
