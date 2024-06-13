import library from "../data/library.json" assert {type: 'json'}

function searchByTitle(titleInput) {
  const titleSearchResults = []
  for (let index = 0; index < library.data.length; index++) {
    if(library.data[index].title === titleInput) { 
      titleSearchResults.push(library.data[index])
    } 
  }
  return titleSearchResults
}
console.log(searchByTitle('Pancakes'))
