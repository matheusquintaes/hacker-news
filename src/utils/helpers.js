export function formatDate (timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("en-UK")
}

export function removeDeleted (data) {

  const arr = data.filter(data => {
    return data.deleted !== true
  })

  return arr
  // return data.filter(({ deleted }) => deleted !== true)
}