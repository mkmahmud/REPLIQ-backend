// login user credentials
export type ILoginUser = {
  phoneNumber: string
  password: string
}

// login user response
export type ILoginUserResponse = {
  accessToken: string
  refreshToken?: string
}

// Refresh user response
export type IRefreshTokenResponse = {
  accessToken: string
}
