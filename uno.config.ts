import { defineConfig } from 'unocss'

export default defineConfig({
  // Add any presets or custom rules here
  rules: [
    [
      'text-outline',
      { 'text-shadow': '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black' },
    ],
  ],

  theme: {
    fontFamily: {
      playwrite: ['"Playwrite DE Grund"', 'sans-serif'],
      baloo: ["'Baloo Bhaijan 2'", "sans-serif"],
      jomhuria: ["Jomhuria","sans-serif"],
      khand: ["Khand","sans-serif"]


    },
    extend: {
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
    
    colors: {
      BTSblue: {
        DEFAULT: '#27445F',
      },
        BTSskin: {
          DEFAULT: '#FAF2E7',
        },



    },
  }
})
