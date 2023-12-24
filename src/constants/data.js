import images from './images';

const wines = [
  {
    title: 'Banarasi Bliss Shiraz',
    price: '₹56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Ganges Valley Malbec',
    price: '₹59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Banarasi Charm Rosé',
    price: '₹44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Banarasi Rhino Pale Ale',
    price: '₹31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Banarasi Guinness Stout',
    price: '₹26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Banarasi Aperol Delight',
    price: '₹20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Banarasi Stormy Night',
    price: '₹16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Banarasi Daiquiri Bliss',
    price: '₹10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Banarasi Classic Old Fashioned',
    price: '₹31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Banarasi Negroni Elegance',
    price: '₹26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };