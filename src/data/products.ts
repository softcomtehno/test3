import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Защитная каска ГОСТ 12.4.128',
    category: 'head-protection',
    subcategory: 'helmets',
    price: 950,
    wholesalePrice: 750,
    minWholesaleOrder: 10,
    description: 'Защитная каска для строительных работ с повышенной ударопрочностью. Соответствует ГОСТ 12.4.128.',
    features: [
      'Материал: полипропилен высокой плотности',
      'Вес: 380 г',
      'Срок службы: 5 лет',
      'Диапазон температур: от -30°C до +50°C'
    ],
    standards: ['ГОСТ 12.4.128', 'EN 397'],
    images: [
      'https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg',
      'https://images.pexels.com/photos/8961338/pexels-photo-8961338.jpeg'
    ],
    inStock: true,
    expiryDate: '2029-01-01'
  },
  {
    id: '2',
    name: 'Респиратор FFP2 c клапаном',
    category: 'respiratory-protection',
    subcategory: 'respirators',
    price: 450,
    wholesalePrice: 350,
    minWholesaleOrder: 50,
    description: 'Респиратор с клапаном выдоха FFP2 для защиты от пыли и аэрозолей. Степень защиты 94%.',
    features: [
      'Класс защиты: FFP2',
      'Клапан выдоха: есть',
      'Форма: складная',
      'Количество в упаковке: 1 шт'
    ],
    standards: ['ГОСТ Р 58019-2017', 'EN 149:2001+A1:2009'],
    images: [
      'https://images.pexels.com/photos/3987223/pexels-photo-3987223.jpeg',
      'https://images.pexels.com/photos/4429555/pexels-photo-4429555.jpeg'
    ],
    inStock: true,
    expiryDate: '2026-06-01'
  },
  {
    id: '3',
    name: 'Перчатки защитные КЩС',
    category: 'hand-protection',
    subcategory: 'gloves',
    price: 320,
    wholesalePrice: 250,
    minWholesaleOrder: 100,
    description: 'Перчатки для защиты от кислот, щелочей и нефтепродуктов. Повышенная стойкость к химическим веществам.',
    features: [
      'Материал: нитрил',
      'Манжет: удлиненный',
      'Толщина: 0.45 мм',
      'Длина: 33 см'
    ],
    standards: ['ГОСТ 12.4.252-2013', 'EN 388:2016', 'EN 374-1:2016'],
    images: [
      'https://images.pexels.com/photos/4491831/pexels-photo-4491831.jpeg',
      'https://images.pexels.com/photos/6969754/pexels-photo-6969754.jpeg'
    ],
    inStock: true,
    expiryDate: '2027-03-01'
  },
  {
    id: '4',
    name: 'Защитные очки закрытого типа',
    category: 'eye-protection',
    subcategory: 'glasses',
    price: 680,
    wholesalePrice: 520,
    minWholesaleOrder: 30,
    description: 'Защитные очки закрытого типа с непрямой вентиляцией для защиты от пыли, брызг и ультрафиолета.',
    features: [
      'Тип: закрытые',
      'Материал линз: поликарбонат',
      'Покрытие: антизапотевающее',
      'Вентиляция: непрямая'
    ],
    standards: ['ГОСТ 12.4.253-2013', 'EN 166:2001'],
    images: [
      'https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg',

    ],
    inStock: true,
    expiryDate: '2028-05-01'
  },
  {
    id: '5',
    name: 'Защитная обувь S3 SRC',
    category: 'foot-protection',
    subcategory: 'boots',
    price: 3850,
    wholesalePrice: 3200,
    minWholesaleOrder: 10,
    description: 'Защитная обувь с композитным подноском и антипрокольной стелькой. Категория защиты S3 SRC.',
    features: [
      'Категория защиты: S3 SRC',
      'Материал верха: натуральная кожа',
      'Подносок: композитный (200Дж)',
      'Стелька: антипрокольная'
    ],
    standards: ['ГОСТ 12.4.137-2001', 'EN ISO 20345:2011'],
    images: [
      'https://sizopt.by/siz/zashchita-zreniya/images/zn88-surgut-strongglass.png',
      
    ],
    inStock: true,
    expiryDate: '2029-10-01'
  },
  {
    id: '6',
    name: 'Костюм защитный Тайкем 4000',
    category: 'body-protection',
    subcategory: 'suits',
    price: 2150,
    wholesalePrice: 1800,
    minWholesaleOrder: 20,
    description: 'Одноразовый защитный костюм для защиты от биологических и химических опасностей типа 4/5/6.',
    features: [
      'Тип защиты: 4/5/6',
      'Материал: нетканый полипропилен с ламинированием',
      'Швы: проклеенные',
      'Размеры: M-3XL'
    ],
    standards: ['ГОСТ 12.4.252-2013', 'EN 14605:2005+A1:2009'],
    images: [
      'https://images.pexels.com/photos/8942559/pexels-photo-8942559.jpeg',
      'https://images.pexels.com/photos/4047140/pexels-photo-4047140.jpeg'
    ],
    inStock: true,
    expiryDate: '2026-12-01'
  }
];