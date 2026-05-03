use leptos::prelude::*;
use leptos_meta::{provide_meta_context, Title};
use leptos_router::{
    components::{Route, Router, Routes, A},
    StaticSegment,
};

mod pages;
use pages::about::About;
use pages::homepage::HomePage;

#[component]
pub fn App() -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context();

    view! {
        // sets the document title
        <Title text="Welcome to Leptos"/>

        // content for this welcome page
        <Router>
            <nav class="bg-gray-800 text-white shadow-lg">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-bold">
                            "My App"
                        </div>
                        <div class="flex gap-6">
                            <A href="/" attr:class="hover:text-gray-300 transition-colors duration-200">
                                "Homepage"
                            </A>
                            <A href="/about" attr:class="hover:text-gray-300 transition-colors duration-200">
                                "About"
                            </A>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <Routes fallback=|| "Page not found.".into_view()>
                    <Route path=StaticSegment("") view=HomePage/>
                    <Route path=StaticSegment("/about") view=About />
                </Routes>
            </main>
        </Router>
    }
}

// /// Renders the home page of your application.
// #[component]
// fn HomePage() -> impl IntoView {
//     // Creates a reactive value to update the button
//     let count = RwSignal::new(0);
//     let on_click = move |_| *count.write() += 1;

//     view! {
//         <h1>"Welcome to Leptos!"</h1>
//         <button on:click=on_click>"Click Me: " {count}</button>
//     }
// }
