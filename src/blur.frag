#version 120 // glsl version 1.2 for OpenGL 2.1

uniform float WINDOW_WIDTH = 800.0;
uniform float WINDOW_HEIGHT = 600.0;
uniform sampler2D texture;

void main() {
    // Normalize pixel position to [0, 1] using the window dimensions
    vec2 uv = gl_TexCoord[0].xy;

    // Average among the 5x5 box filter
    vec4 sum = vec4(0.0);
    for (int x = -2; x <= 2; x++) {
        for (int y = -2; y <= 2; y++) {
            // normalize offset to window dimensions
            vec2 offset = vec2(x,y) / vec2(WINDOW_WIDTH, WINDOW_HEIGHT);
            sum += texture2D(texture, uv + offset);
        }
    }

    // Fragment shader should output into gl_FragColor an RGBA:
    gl_FragColor = (sum / 25.0);  // Average;
}
