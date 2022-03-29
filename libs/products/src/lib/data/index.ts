export interface ProductInterface {
    id: number;
    title: string;
    image: string;
    price: number;
  }

export function getProducts(): ProductInterface[] {
  return [
    {
      id: 1,
      title: 'Iphone 10',
      image: 'https://dummyimage.com/600x400/ffffff/000000&text=Iphone+10',
      price: 5000,
    },
    {
      id: 2,
      title: 'Iphone 11',
      image: 'https://dummyimage.com/600x400/ffffff/000000&text=Iphone+11',

      price: 11000,
    },
    {
      id: 3,
      title: 'Iphone 12',
      image: 'https://dummyimage.com/600x400/ffffff/000000&text=Iphone+12',
      price: 13000,
    },
    {
      id: 4,
      image: 'https://dummyimage.com/600x400/ffffff/000000&text=Iphone+13',
      title: 'Iphone 13',
      price: 15000,
    },
  ];
}