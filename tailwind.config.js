const defaultTheme = require('tailwindcss/defaultTheme.js');
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-mobile': "url('/images/mobile/image-hero.jpg')",
        'hero-image-desktop': "url('/images/desktop/image-hero.jpg')",
        'mobile-deep-earth': "url('/images/mobile/image-deep-earth.jpg')",
        'mobile-curiosity': "url('/images/mobile/image-curiosity.jpg')",
        'mobile-night-arcade': "url('/images/mobile/image-night-arcade.jpg')",
        'mobile-soccer-team': "url('/images/mobile/image-soccer-team.jpg')",
        'mobile-grid': "url('/images/mobile/image-grid.jpg')",
        'mobile-from-above': "url('/images/mobile/image-from-above.jpg')",
        'mobile-pocket-borealis': "url('/images/mobile/image-pocket-borealis.jpg')",
        'mobile-fisheye': "url('/images/mobile/image-fisheye.jpg')",
        'desktop-deep-earth': "url('/images/desktop/image-deep-earth.jpg')",
        'desktop-curiosity': "url('/images/desktop/image-curiosity.jpg')",
        'desktop-night-arcade': "url('/images/desktop/image-night-arcade.jpg')",
        'desktop-soccer-team': "url('/images/desktop/image-soccer-team.jpg')",
        'desktop-grid': "url('/images/desktop/image-grid.jpg')",
        'desktop-from-above': "url('/images/desktop/image-from-above.jpg')",
        'desktop-pocket-borealis': "url('/images/desktop/image-pocket-borealis.jpg')",
        'desktop-fisheye': "url('/images/desktop/image-fisheye.jpg')",
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin': ['"Josefin sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
