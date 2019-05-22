export default () => {
  // auth token
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN

  return {
    httpEndpoint: 'https://api.github.com/graphql',
    getAuth: () => `Bearer ${token}`
  }
}
