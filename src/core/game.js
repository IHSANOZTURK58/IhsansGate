export function getDifficultyForLevel(allWordsCount, lvl) {
    const totalLevels = Math.floor(allWordsCount / 50);

    if (lvl <= totalLevels * 0.3) return ['A1', 'A2'];
    if (lvl <= totalLevels * 0.7) return ['B1', 'B2'];
    return ['C1', 'C2'];
}

export function getFallbackDifficulty(targetDiffs) {
    if (targetDiffs.includes('C1') || targetDiffs.includes('C2')) return ['B1', 'B2'];
    if (targetDiffs.includes('B1') || targetDiffs.includes('B2')) return ['A1', 'A2'];
    return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
}

export function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function generateLevelWords(allWords, level) {
    const requiredCount = 50;
    let pool = [...allWords];

    const weights = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };

    pool.sort((a, b) => {
        const wa = weights[a.level || 'A1'] || 1;
        const wb = weights[b.level || 'A1'] || 1;
        if (wa !== wb) return wa - wb;
        return String(a.id).localeCompare(String(b.id));
    });

    const startIndex = (level - 1) * requiredCount;
    const realStart = startIndex % pool.length;
    let selectedWords = pool.slice(realStart, realStart + requiredCount);

    if (selectedWords.length < requiredCount) {
        selectedWords = selectedWords.concat(pool.slice(0, requiredCount - selectedWords.length));
    }

    return shuffleArray(selectedWords);
}
