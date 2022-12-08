export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     if (!emailRegex.test(email)) {
         return 'Invalid email'
      }
      return null
    }

export const validatePassword = (password) => {
    if (password.length < 6) {
        return 'Password must be at least 6 characters'
    }
    return null
}

// validte password and repwd
export const validatePasswordMatch = (password, repwd) => {
    if (password !== repwd) {
        return 'Passwords do not match'
    }
    return null
}

export const isBlank = (value) => {
    if (!value || value === '') {
        return "This field is required"
    }
    return null
}
