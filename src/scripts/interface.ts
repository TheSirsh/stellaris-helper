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
}

interface ISpecies {
  trait: string,
  nameEN: string,
  nameRU: string,
  icon: string,
  traits : Array<Array<string>>,
}

interface IBiological {
    trait: string,
    icon: string,
    nameEN: string,
    nameRU: string,
    number1: string,
    text1EN: string,
    text1RU: string,
    number2?: string,
    text2EN?: string,
    text2RU?: string,
}

interface IFooter {
  nameEN: string,
  nameRU: string,
  src: string,
}

export { IHeader, IMainText, ISpecies, IClimate, IBiological, IFooter }