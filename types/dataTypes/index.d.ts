interface IData {
  img1: string;
  img2: string;
  title: string;
  address: string;
  phone: string;
  shortDescription: string;
  type: string;
  weather: ICartDegree;
  social_info: ICartSocial;
}

interface ICartSocial {
  img: string;
  followers: number;
  following: number;
}

interface ICartDegree {
  title: string;
  water: number;
  temperature: number;
}

declare enum MenuEnum {
  'Все отели' = 'all',
  'Апартаменты' = 'apartments',
  'Номера люкс' = 'lux'
}
  




