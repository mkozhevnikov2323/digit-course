import ShipOne from '@/shared/assets/images/Enterprise.png';
import ShipTwo from '@/shared/assets/images/Falcon.png';
import ShipThree from '@/shared/assets/images/Serenity.png';

export const mockShipList = [
  {
    id: '1',
    name: 'USS Enterprise',
    type: 'Explorer',
    manufacturer: 'Federation',
    speed: 'Warp 9.6',
    price: 1000,
    image: ShipOne,
  },
  {
    id: '2',
    name: 'Millennium Falcon',
    type: 'Freighter',
    manufacturer: 'Corellian Engineering',
    speed: 'Sublight (super fast)',
    price: 1500,
    image: ShipTwo,
  },
  {
    id: '3',
    name: 'Serenity',
    type: 'Transport',
    manufacturer: 'Firefly Class',
    speed: 'Sublight',
    price: 900,
    image: ShipThree,
  },
];
