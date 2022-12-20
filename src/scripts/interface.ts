interface IHeader {
  nameEN: string,
  nameRU: string,
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
  buttonEN: string,
  buttonRU: string,
  image?: string,
  imageAltEN?: string,
  imageAltRU?: string,
}

interface IClimate {
  trait: string,
  icon: string,
  image: string,
  nameEN: string,
  nameRU: string,
  descrEN: string,
  exclude?: Array<string>,
}

interface ITraits {
  trait: string,
  icon: string,
  nameEN: string,
  nameRU: string,
  traits : Array<Array<string>>,
}

interface IFooter {
  nameEN: string,
  nameRU: string,
  src: string,
}

export { IHeader, IMainText, IClimate, ITraits, IFooter }