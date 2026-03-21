// src/main.rs
use esp_idf_hal::delay::FreeRtos;
use esp_idf_hal::gpio::*;
use esp_idf_hal::peripherals::Peripherals;

fn main() -> anyhow::Result<()> {
    // Necessario per inizializzare l'ecosistema esp-idf
    esp_idf_svc::sys::link_patches();

    let peripherals = Peripherals::take()?;

    // Usa GPIO2 (LED built-in su molte schede ESP32)
    // Cambia il pin in base al tuo hardware
    let mut led = PinDriver::output(peripherals.pins.gpio2)?;

    loop {
        led.set_high()?;
        FreeRtos::delay_ms(1000);

        led.set_low()?;
        FreeRtos::delay_ms(1000);
    }
}