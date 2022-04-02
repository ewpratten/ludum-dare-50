use nalgebra as na;
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct PossiblyAnimatedTexture {
    /// Signal if the texture is animated or static
    pub animated: bool,
    /// Relative file path from `dist` to the texture
    pub rel_file_path: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct WorldObject {
    /// Object name. Must match the name of the texture
    pub name: String,
    /// Object variant name. Must match the name of the texture, or None if there is only one variant
    pub variant_name: Option<String>,
    /// Object position. 1,1 being up and to the right
    pub position: na::Vector2<f32>,
    /// Object rotation, positive is clockwise
    pub rotation_radians: f32,
    /// The object's bottom texture
    pub bottom_texture: PossiblyAnimatedTexture,
    /// The object's top texture
    pub top_texture: Option<PossiblyAnimatedTexture>,
}