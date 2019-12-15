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
      return ids.slice(0, 10)
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



// export async function getPopularNews () {

//   await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
//   .then((res) => {
//     if(res.status !== 200) {
//       console.error(`Looks like there was a problem. Status Code: ${res.status}`)
//       return
//     }
//     res.json().then((data => {

//       const newsIdList = filterNewsByQuantity(data,10)
//       return getNews(newsIdList).then((res) => console.log(res))

//     }))

//   }).catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   })
  
// }

// function filterNewsByQuantity(data, quantity) {

//   return data.slice(0,quantity)

// }

// async function getNews(newsIdList){

//   await Promise.all(newsIdList.map(id=>fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)))
//     .then(res => Promise.all(res.map(res => res.json())))
//     .then(data => data)
// }