import { Component } from '../Component.js';

export class WordListView extends Component {
    render() {
        return `
            <div id="view-list" class="view hidden">
                <div class="list-header">
                    <div style="position: relative; display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; min-height: 40px;">
                        <button class="btn-icon back-btn-top" onclick="app.openModeSelection()" title="Geri"
                            style="position: absolute; left: 2px; top: 50%; transform: translateY(-50%);">
                            &larr;
                        </button>
                        <h2 style="margin:0; font-size:1.5rem;">Kelimeler</h2>
                    </div>

                    <div class="search-bar">
                        <input type="text" id="search-input" placeholder="Kelime ara..." onkeyup="app.filterList()">
                    </div>
                    <div class="filter-tabs">
                        <button class="filter-tab active" id="filter-all" onclick="app.setListFilter('all')">
                            <span>📚</span> Tümü <span id="total-word-count" style="font-size:0.8em; opacity:0.7; margin-left:4px">(0)</span>
                        </button>
                        <button class="filter-tab" id="filter-favs" onclick="app.setListFilter('favs')">
                            <span>⭐</span> Favoriler
                        </button>
                    </div>

                    <div class="level-filters">
                        <button class="level-chip active" onclick="app.setLevelFilter('all', this)">Tüm Seviyeler</button>
                        <button class="level-chip" onclick="app.setLevelFilter('A1', this)">A1</button>
                        <button class="level-chip" onclick="app.setLevelFilter('A2', this)">A2</button>
                        <button class="level-chip" onclick="app.setLevelFilter('B1', this)">B1</button>
                        <button class="level-chip" onclick="app.setLevelFilter('B2', this)">B2</button>
                        <button class="level-chip" onclick="app.setLevelFilter('C1', this)">C1</button>
                        <button class="level-chip" onclick="app.setLevelFilter('C2', this)">C2</button>
                    </div>
                </div>
                <div id="word-list-items" class="word-list-container">
                    <!-- Items JS -->
                </div>
            </div>
        `;
    }
}
