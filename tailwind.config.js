/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Kita bisa menambahkan warna custom di sini nanti
      colors: {
        primary: '#1B211A', // Contoh warna dark slate
        accent: '#38bdf8',  // Contoh warna sky blue
      }
    },
  },
  plugins: [],
}