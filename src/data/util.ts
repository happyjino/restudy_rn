export const makeArray = (length: number) => new Array(length).fill(null)
export const random = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min
export const picsumUrl = (width: number, height: number): string =>
  // `https://source.unsplash.com/random/${width}x${height}`
  `https://picsum.photos/${width}/${height}`
export const avatarUriByName = (name: string) => `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`
