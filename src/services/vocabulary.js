import { db } from './firebase.js';

export function getAllWords(customWords = [], globalWords = []) {
    const staticData = window.WORD_DATA || [];
    return [...staticData, ...customWords, ...globalWords];
}

export function searchWord(query) {
    if (!query || query.trim() === '') return null;
    const searchTerm = query.trim().toLowerCase();

    let result = window.WORD_DATA.find((w) => w.word.toLowerCase() === searchTerm);
    return result || null;
}

export function setupWordListener(onWordsLoaded) {
    return db.collection('words').onSnapshot((snapshot) => {
        const globalWords = [];
        snapshot.forEach((doc) => {
            const d = doc.data();
            if (d.word && d.meaning) {
                globalWords.push({
                    id: doc.id,
                    word: d.word,
                    meaning: d.meaning,
                    level: d.level || 'A1'
                });
            }
        });
        onWordsLoaded(globalWords);
    });
}

export async function addWordToGlobal(word, meaning, level, addedBy) {
    return db.collection('words').add({
        word: word,
        meaning: meaning,
        level: level,
        addedBy: addedBy || 'Admin',
        timestamp: window.firebase.firestore.FieldValue.serverTimestamp()
    });
}
