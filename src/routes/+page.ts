// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

export const prerender = true;


// import Database from '@tauri-apps/plugin-sql';
// const db = await Database.load('ssqlite:goblindatabase.db');