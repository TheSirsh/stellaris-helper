interface IHeader {
  nameEN: string,
  nameRU: string,
}

interface IAudioPlayer {
  name: string,
  src: string,
  alt: string,
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
  image?: string,
  border?: string,
  nameEN: string,
  nameRU: string,
  descrEN?: string,
  traits? : Array<Array<string>>,
  exclude?: Array<string>,
}

interface IFooter {
  nameEN: string,
  nameRU: string,
  src: string,
}

export { IHeader, IAudioPlayer, ITrack, IMainText, ITraits, IFooter }