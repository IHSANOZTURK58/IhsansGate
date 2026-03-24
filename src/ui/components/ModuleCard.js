import { Component } from '../Component.js';

export class ModuleCard extends Component {
    render() {
        const { icon, title, description, onClick, isHero } = this.props;
        return `
            <div class="module-card ${isHero ? 'hero' : ''}" onclick="${onClick}">
                <div class="icon-box">${icon}</div>
                <div class="module-info">
                    <h4>${title}</h4>
                    <p>${description}</p>
                </div>
                <div class="hover-glow"></div>
            </div>
        `;
    }
}
