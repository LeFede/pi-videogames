export const adaptVideogame = (game, crop = true) => {

  console.log(game.background_image)
  // const final = game.background_image
  const divideUrl = "https://media.rawg.io/media/"
  const fullUrl = game.background_image
  const divideIndex= fullUrl.lastIndexOf(divideUrl)

  const start = fullUrl.slice(0, divideIndex+ divideUrl.length)
  const end = fullUrl.slice(divideIndex+ divideUrl.length)

  const final = start + ( crop ? "crop/600/400/" : "") + end

  return {
    genres    : game.genres,
    id        : game.id,
    image     : final,
    name      : game.name,
    platforms : game.platforms,
    rating    : game.rating,
    released  : game.released,
  }
}
