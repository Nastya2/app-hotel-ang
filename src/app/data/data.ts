import { Observable, of } from 'rxjs';


export const widgetData: IData[] = [
{
    img1: 'bg-small2.jpg',
    img2: 'bg-small1.jpg',
    title: 'BB Marnix',
    address: 'Амстердам - центр города, 1015 ZE Амстердам',
    phone:  12343234,
    shortDescription: 'Шикарные панорамные окна с видом на спокойный канал',
    weather: {
      title: 'Погода супер!',
      water: 22,
      temperature: 25
    },
    social_info: {
      img: 'bg-small2.jpg',
      followers: 3000000,
      following: 5444,
    },
    type: 'apartments'
},
{
    img1: 'bg-small2.jpg',
    img2: 'bg-small1.jpg',
    title: 'Leman Locke',
    address: 'ауэр-Хэмлетс, Лондон, E1 8EN, Великобритания ',
    phone:  375335782623,
    shortDescription: 'Апартаменты полностью соответствуют фото',
    weather: {
        title: 'Супер!',
        water: 25,
        temperature: 34
    },
    social_info: {
        img: 'bg-small1.jpg',
        followers: 780,
        following: 1520,
    },
    type: 'apartments'
},
{
    img1: 'bg-small2.jpg',
    img2: 'bg-small1.jpg',
    title: 'Апартаменты Дом Удачи',
    address: 'Московский проспект 138, кв. 36, Санкт-Петербург, Россия',
    phone:  375292603405,
    shortDescription: 'Месторасположение замечательное, ст.метро, остановки общественного транспорта.',
    weather: {
        title: 'Тепло!',
        water: 29,
        temperature: 30
    },
    social_info: {
        img: 'b1.jpg',
        followers: 400,
        following: 2100
    },
    type: 'lux'
}];

export const widgetData$: Observable<IData[]> = of(widgetData);