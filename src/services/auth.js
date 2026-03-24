import { auth, db } from './firebase.js';

export async function loginUser(username, password) {
    const fakeEmail = username.toLowerCase().replace(/[^a-z0-9_]/g, '') + '@ihsansgate.local';
    return auth.signInWithEmailAndPassword(fakeEmail, password);
}

export async function registerUser(username, password) {
    const fakeEmail = username.toLowerCase().replace(/[^a-z0-9_]/g, '') + '@ihsansgate.local';
    const userCredential = await auth.createUserWithEmailAndPassword(fakeEmail, password);
    const user = userCredential.user;

    // Use globally available firebase for FieldValue due to compat SDK limitations
    await db.collection('users').doc(user.uid).set({
        username: username,
        email: fakeEmail,
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
        score: 0
    });

    await user.updateProfile({ displayName: username });
    return user;
}

export async function logoutUser() {
    return auth.signOut();
}

export function getAuthErrorMessage(code) {
    switch (code) {
        case 'auth/email-already-in-use':
            return 'Bu kullanıcı adı zaten kullanılıyor.';
        case 'auth/invalid-email':
            return 'Geçersiz kullanıcı adı formatı.';
        case 'auth/wrong-password':
            return 'Bir hata oluştu: Kullanıcı adı veya şifre hatalı.';
        case 'auth/user-not-found':
            return 'Bir hata oluştu: Kullanıcı adı veya şifre hatalı.';
        case 'auth/weak-password':
            return 'Şifre çok zayıf.';
        case 'auth/operation-not-allowed':
            return 'Giriş yöntemi kapalı.';
        case 'auth/network-request-failed':
            return 'Bağlantı hatası.';
        case 'auth/too-many-requests':
            return 'Çok fazla deneme! Biraz bekleyin.';
        default:
            return 'Bir hata oluştu.';
    }
}
