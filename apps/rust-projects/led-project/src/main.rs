// src/main.rs
use esp_idf_hal::delay::FreeRtos;
use esp_idf_hal::gpio::*;
use esp_idf_hal::peripherals::Peripherals;

fn main() -> anyhow::Result<()> {
    // Necessario per inizializzare l'ecosistema esp-idf
    esp_idf_svc::sys::link_patches();

    esp_idf_svc::log::EspLogger::initialize_default();
    log::info!("Starting LED project!");

    let peripherals = Peripherals::take()?;

    // Usa GPIO2 (LED built-in su molte schede ESP32)
    // Cambia il pin in base al tuo hardware
    let mut led = PinDriver::output(peripherals.pins.gpio26)?;

    loop {
        led.set_high()?;
        log::info!("LED ON: I love cate");
        FreeRtos::delay_ms(1000);
        
        led.set_low()?;
        log::info!("LED OFF: I love cate");
        FreeRtos::delay_ms(1000);
    }
}