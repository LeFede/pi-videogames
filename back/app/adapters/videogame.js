export const adaptVideogame = (game) => {
  return {
    genres    : game.genres,
    id        : game.id,
    image     : `https://api.rawg.io/media/crop/600/400${game.background_image.split("io/media")[1]}`,
    name      : game.name,
    platforms : game.platforms,
    rating    : game.rating,
    released  : game.released,
  }
}
