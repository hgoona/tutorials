interface ImportMetaEnv {
    //safe to share
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;


}
interface ImportMeta {
    readonly env: ImportMetaEnv
}