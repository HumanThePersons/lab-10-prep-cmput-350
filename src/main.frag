#version 120 // glsl version 1.2 for OpenGL 2.1

uniform float WINDOW_WIDTH = 800.0;
uniform float WINDOW_HEIGHT = 600.0;
uniform vec2 cursorPosition = vec2(0.0, 0.0);
uniform float timeChange = 0.0;

void main(void) {
    // Calculate distance from cursor to current pixel
    float dist = distance(gl_FragCoord.xy, cursorPosition);

    // If dist is less than or equal to radius, set the pixel colour to white (drawing a circle)
    if (dist <= 10.0) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);  // white
    }
    else {
        // Normalize pixel position to [0, 1] using the window dimensions
        vec2 uv = gl_FragCoord.xy / vec2(WINDOW_WIDTH, WINDOW_HEIGHT);

        // Fragment shader should output into gl_FragColor an RGBA:
        // RGB - R is based on the x, G is based on the y, B is always 0, A is always 1
        
        float shift = sin(timeChange) * 0.5;  // horizontal shift that moves back and forth
        uv += vec2(shift, 0.0);  // Shifts the background horizontally
        gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
    }
}