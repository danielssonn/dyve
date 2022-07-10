module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out'
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },

      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      },
      backgroundImage: {
        dashboard: "url('./images/bg-dashboard.png')",
        trophy: "url('./images/trophy.png')",
        crown: "url('./images/crown.png')",
        rocket: "url('./images/rocket.png')",
        tree: "url('./images/tree.png')",
        coins: "url('./images/coins.png')",
        rank: "url('./images/rank.png')",
        eth: "url('./images/eth.png')",
        sand: "url('./images/sand.png')",
        staking: "url('./images/staking.png')",
        team: "url('./images/team.png')"
      }
    },
    height: {
      '1/3': '33.333333%',
      '2/5': '40%',
      '4/5': '80%',
      '10v': '10vh',
      '20v': '20vh',
      '30v': '30vh',
      '40v': '40vh',
      '50v': '50vh',
      '60v': '60vh',
      '70v': '70vh',
      '80v': '80vh',
      '90v': '90vh',
      '100v': '100vh'
    }
  },
  plugins: [require('tailwindcss-neumorphism')]
}
