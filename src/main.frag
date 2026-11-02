#version 120 // glsl version 1.2 for OpenGL 2.1

uniform float WINDOW_WIDTH = 800.0;
uniform float WINDOW_HEIGHT = 600.0;

void main(void) {
    // Normalize pixel position to [0, 1] using the window dimensions
    vec2 uv = gl_FragCoord.xy / vec2(WINDOW_WIDTH, WINDOW_HEIGHT);

    // Fragment shader should output into gl_FragColor an RGBA:
    // RGB - R is based on the x, G is based on the y, B is always 0, A is always 1
    gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}