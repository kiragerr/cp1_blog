import { defineStore } from 'pinia'

// 主题控制器
export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'cupcake'
  }),
  getters: {
    isDark: (state) => {
      if (state.theme === 'dark') {
        return true
      } else {
        return false
      }
    }
  },
  actions: {
    swapTheme() {
      this.theme = this.theme === 'cupcake' ? 'dark' : 'cupcake'
    },
    setTheme(theme) {
      this.theme = theme
    }
  }
})