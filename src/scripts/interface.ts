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

export { IHeader, IMainText, ITraits, IFooter }