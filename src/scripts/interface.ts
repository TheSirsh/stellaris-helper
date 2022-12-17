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
    number3?: string,
    text3EN?: string,
    text3RU?: string,
    number4?: string,
    text4EN?: string,
    text4RU?: string,
    number5?: string,
    text5EN?: string,
    text5RU?: string,
    number6?: string,
    text6EN?: string,
    text6RU?: string,
    number7?: string,
    text7EN?: string,
    text7RU?: string,
}

interface IFooter {
  nameEN: string,
  nameRU: string,
  src: string,
}

export { IHeader, IMainText, ISpecies, IClimate, IBiological, IFooter }