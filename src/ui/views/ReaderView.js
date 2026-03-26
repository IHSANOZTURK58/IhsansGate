import { Component } from '../Component.js';

export class ReaderView extends Component {
    render() {
        return `
            <div id="view-reader" class="view hidden">
                <div class="reader-header">
                    <button class="reader-back-btn" onclick="app.closeBook()" title="Kütüphaneye Dön">&larr;</button>
                    <div class="reader-search-box">
                        <input type="text" id="dictionary-search" autocomplete="off" placeholder="Sözlük: Kelime ara..." oninput="app.handleSearchInput(this.value)" onblur="app.hideSuggestions()" onkeyup="if(event.key === 'Enter') { app.lookupWord(this.value); app.hideSuggestions(); }">
                        <span class="search-icon">🔍</span>
                        <div id="search-suggestions" class="search-suggestions"></div>
                    </div>
                    <div class="reader-header-title" style="text-align: right; display: flex; align-items: center; gap: 0.5rem; justify-content: flex-end;">
                        <button id="btn-book-speak" class="btn-icon-small" onclick="app.speakCurrentPage()" title="Dinle" style="font-size: 1.2rem; background: rgba(255,255,255,0.1); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.2); color: var(--accent-gold); cursor: pointer; transition: all 0.2s;">🔊</button>
                        <div>
                            <h3 id="reader-book-title" style="margin:0;">Book Title</h3>
                            <span id="reader-book-level">Level A1</span>
                        </div>
                    </div>
                </div>
                <div class="reader-container">
                    <div class="book-frame">
                        <div id="reader-content" class="reader-content">
                            <!-- Text injected via JS -->
                        </div>
                        <div id="bookmark-ribbon" class="bookmark-ribbon" onclick="app.toggleBookmark()" title="Kaldığın yeri işaretle">
                            <div class="ribbon-tail"></div>
                        </div>
                    </div>
                </div>
                <div class="reader-pagination">
                    <button id="btn-prev-page" class="pagination-btn" onclick="app.prevBookPage()" title="Önceki Sayfa">←</button>
                    <span id="page-indicator" class="page-indicator">Sayfa 1 / 1</span>
                    <button id="btn-next-page" class="pagination-btn" onclick="app.nextBookPage()" title="Sonraki Sayfa">→</button>
                </div>
            </div>
        `;
    }
}
