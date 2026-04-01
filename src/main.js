// Entry point for Vite
import './services/firebase.js';

// Import CSS
import '../css/style.css';
import '../css/grammar-topics.css';
import '../css/writing-mode.css';
import '../css/reading.css';
import '../css/gemini_teacher_layout.css';

// Import UI Components
import { LandingView } from './ui/views/LandingView.js';
import { DashboardView } from './ui/views/DashboardView.js';
import { WritingModesView } from './ui/views/WritingModesView.js';
import { LibraryView } from './ui/views/LibraryView.js';
import { ScenariosView } from './ui/views/ScenariosView.js';
import { ScenarioPlayerView } from './ui/views/ScenarioPlayerView.js';
import { SurvivalGameOverView } from './ui/views/SurvivalGameOverView.js';
import { ModeSelectionView } from './ui/views/ModeSelectionView.js';
import { VocabularyGameView } from './ui/views/VocabularyGameView.js';
import { LevelMapView } from './ui/views/LevelMapView.js';
import { WritingGameView } from './ui/views/WritingGameView.js';
import { AITeacherView } from './ui/views/AITeacherView.js';
import { ListeningGameView } from './ui/views/ListeningGameView.js';
import { WordListView } from './ui/views/WordListView.js';
import { GlobalLeaderboardView } from './ui/views/GlobalLeaderboardView.js';
import { GrammarTopicsView } from './ui/views/GrammarTopicsView.js';
import { GrammarTestView } from './ui/views/GrammarTestView.js';
import { LibraryListView } from './ui/views/LibraryListView.js';
import { ReaderView } from './ui/views/ReaderView.js';

import { LoginModal } from './ui/components/LoginModal.js';
import { GameOverModal } from './ui/components/GameOverModal.js';
import { VoiceSettingsModal } from './ui/components/VoiceSettingsModal.js';
import { GrammarExplanationModal } from './ui/components/GrammarExplanationModal.js';
import { UtilityModals } from './ui/components/UtilityModals.js';

// Import data scripts (Side-effect imports from public folder)
import '../public/js/words.js';
import '../public/js/basic_vocabulary.js';
import '../public/js/sentences.js';
import '../public/js/grammar.js';
import '../public/js/grammar_explanations.js';
import '../public/js/scenarios.js';

// Import local logic modules
import { TTSManager } from '../js/tts.js';
import { app } from '../js/app.js';
import { GeminiTeacher } from '../js/gemini_teacher.js';

// Make them globally available for legacy logic and UI callbacks
window.TTSManager = TTSManager;
window.app = app;
window.GeminiTeacher = GeminiTeacher;

// Initialize and Mount UI
const appUI = document.getElementById('app-ui');
if (appUI) {
    const views = [
        new LandingView(),
        new DashboardView(),
        new WritingModesView(),
        new LibraryView(),
        new ScenariosView(),
        new ScenarioPlayerView(),
        new SurvivalGameOverView(),
        new ModeSelectionView(),
        new VocabularyGameView(),
        new LevelMapView(),
        new WritingGameView(),
        new AITeacherView(),
        new ListeningGameView(),
        new WordListView(),
        new GlobalLeaderboardView(),
        new GrammarTopicsView(),
        new GrammarTestView(),
        new LibraryListView(),
        new ReaderView(),

        new LoginModal(),
        new GameOverModal(),
        new VoiceSettingsModal(),
        new GrammarExplanationModal(),
        new UtilityModals()
    ];
    views.forEach(view => view.mount(appUI));

    // Initialize the app logic after all components are mounted
    if (app && typeof app.init === 'function') {
        app.init();
    }
}
