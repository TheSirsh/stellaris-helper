interface IHeaderFooter {
  nameEN: string,
  nameRU: string,
  src?: string,
}

interface IAudioPlayer {
  type: string,
  name: string,
  text?: string,
  src?: string,
  alt?: string,
}

interface ITrack {
  name: string,
  src: string,
  duration: number,
}

interface IMainText {
  titleEN: string,
  titleRU: string
  subtitleEN: string,
  subtitleRU: string
  descriptionBlockTitleEN : string,
  descriptionBlockTitleRU : string,
  descriptionBlockTextEN : string,
  descriptionBlockTextRU : string,
  image?: string,
  imageAltEN?: string,
  imageAltRU?: string,
}

interface ITraits {
  trait: string,
  icon: string,
  nameEN: string,
  nameRU: string,
  descrEN?: string,
  traits : Array<Array<string>>,
  exclude?: Array<string>,
  border?: string,
  image?: string,
  imageAltEN?: string,
  imageAltRU?: string,
}

interface IRelics extends ITraits {
  triumph: Array<Array<string>>,
}

export { IHeaderFooter, IAudioPlayer, ITrack, IMainText, ITraits, IRelics, }