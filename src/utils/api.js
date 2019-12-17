const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

// https://hacker-news.firebaseio.com/v0/topstories.json`

export function fetchItem (id) {
  return fetch(`${api}/item/${id}${json}`)
    .then((res) => res.json())
}

export function fetchMainPosts (type) {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`)
      }
      return ids.slice(0, 20)
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts))))
}


function removeDeleted (posts) {
  return posts.filter(({ deleted }) => deleted !== true)
}

function onlyPosts (posts) {
  return posts.filter(({ type }) => type === 'story')
}

function removeDead (posts) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}
