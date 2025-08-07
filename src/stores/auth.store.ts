import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref<string | null>(null)

  // Getters
  const getToken = computed(() => {
    if (typeof window !== 'undefined') {
      const storedToken = window.localStorage.getItem('soso-token')
      token.value = storedToken // 保持同步
      return storedToken
    }
    return null
  })

  const isAuthenticated = computed(() => !!getToken.value)

  // Actions
  function setToken(newToken: string) {
    token.value = newToken
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('soso-token', newToken)
    }
  }

  function clearToken() {
    token.value = null
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('soso-token')
    }
  }

  return {
    token,
    getToken,
    isAuthenticated,
    setToken,
    clearToken,
  }
})
