
use leptos::prelude::*;


#[component]
pub fn HomePage() -> impl IntoView {

    return view! {
        <div class="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 class="text-3xl font-bold mb-8">"Homepage"</h1>
            <button class="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200">
                "Ricerca dispositivi"
            </button>
        </div>
    }
}