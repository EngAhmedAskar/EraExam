export const success = (res, status) => (entity) => {
  if (entity) {
    res.status(status || 200).json(entity)
  }
  return null
}

export const notFound = (res) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(404).end()
  return null
}

export const authorOrAdmin = (res, user, userField) => (entity) => {
  if (entity) {
    console.log('service.response.index Cheking rolls...')
    const isAdmin = user.role === 'admin'
    const hasRole = entity[userField] && entity[userField].equals(user.id)
    if (hasRole || isAdmin) {
      return entity
    }
    res.status(401).end()
  }
  return null
}
