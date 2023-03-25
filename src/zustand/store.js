import create from "zustand"

const Store = create((set) => ({
  loggedUser: {},
  forgotUser: {},

  setLoggedUser: function (value) {
    set({ loggedUser: value })
  },

  setForgotUser: function (value) {
    set({ forgotUser: value })
  },
  setOtpDate: function (value) {
    set({ otpDate: value })
  },
  
  setRegUser: function (value) {
    set({ RegUser: value })
  },

}))

export default Store
