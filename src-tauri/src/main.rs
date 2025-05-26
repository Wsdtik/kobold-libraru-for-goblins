// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// use tauri_plugin_sql::{Builder, Migration, MigrationKind};

fn main() {
    //   let migrations = vec![
    //     // Define your migrations here
    //     Migration {
    //         version: 1,
    //         description: "create_initial_tables",
    //         sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);",
    //         kind: MigrationKind::Up,
    //     }
    // ];

    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        // .plugin(
        // tauri_plugin_sql::Migration::default()
        //   .add_migrations("sqlite:goblindatabase.db", migrations)
        //   .build(),
        // )
        .invoke_handler(tauri::generate_handler![image_loader])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn image_loader() -> String {
    "Hello bit".into()
}
