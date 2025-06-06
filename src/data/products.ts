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
      'data:image/jpeg;base64,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',

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
      'data:image/jpeg;base64,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',

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
      'data:image/jpeg;base64,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',
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
      'https://sizopt.by/siz/zashchita-zreniya/images/zn88-surgut-strongglass.png',

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