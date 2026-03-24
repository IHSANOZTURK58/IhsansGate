import { Component } from '../Component.js';

export class LibraryListView extends Component {
    render() {
        return `
            <div id="reading-library" class="hidden">
                <div class="game-header-bar">
                    <button class="btn-icon library-back-btn" onclick="app.openReadingListeningModes()" title="Geri">&larr;</button>
                    <h2 style="margin:0; font-size:1.5rem;">Kütüphane</h2>
                    <div style="width:40px;"></div>
                </div>
                <div class="library-grid" id="library-grid">
                    <!-- Books injected via JS -->
                </div>
            </div>
        `;
    }
}
