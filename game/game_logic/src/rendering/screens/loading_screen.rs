use raylib::prelude::*;

use crate::discord::DiscordChannel;

#[derive(Debug)]
pub struct LoadingScreen {}

impl LoadingScreen {
    /// Construct a new `LoadingScreen`
    pub fn new() -> Self {
        Self {}
    }

    pub fn render(
        &mut self,
        raylib: &mut RaylibHandle,
        rl_thread: &RaylibThread,
        discord: &DiscordChannel,
    ) -> bool {
        let mut d = raylib.begin_drawing(&rl_thread);

        d.clear_background(raylib::color::Color::WHITE);

        true
    }
}
