import { Category } from '../types';
import { HardHat, Settings as Lungs, HandMetal, Eye, Bot as Boot, Shield } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'head-protection',
    name: 'Защита головы',
    icon: 'HardHat',
    subcategories: [
      { id: 'helmets', name: 'Каски' },
      { id: 'bump-caps', name: 'Защитные кепки' },
      { id: 'accessories', name: 'Аксессуары' }
    ]
  },
  {
    id: 'respiratory-protection',
    name: 'Защита дыхания',
    icon: 'Lungs',
    subcategories: [
      { id: 'respirators', name: 'Респираторы' },
      { id: 'gas-masks', name: 'Противогазы' },
      { id: 'filters', name: 'Фильтры' }
    ]
  },
  {
    id: 'hand-protection',
    name: 'Защита рук',
    icon: 'HandMetal',
    subcategories: [
      { id: 'gloves', name: 'Перчатки' },
      { id: 'sleeves', name: 'Нарукавники' }
    ]
  },
  {
    id: 'eye-protection',
    name: 'Защита глаз',
    icon: 'Eye',
    subcategories: [
      { id: 'glasses', name: 'Очки' },
      { id: 'shields', name: 'Щитки' }
    ]
  },
  {
    id: 'foot-protection',
    name: 'Защита ног',
    icon: 'Boot',
    subcategories: [
      { id: 'boots', name: 'Ботинки' },
      { id: 'shoes', name: 'Полуботинки' },
      { id: 'insoles', name: 'Стельки' }
    ]
  },
  {
    id: 'body-protection',
    name: 'Защита тела',
    icon: 'Shield',
    subcategories: [
      { id: 'suits', name: 'Костюмы' },
      { id: 'vests', name: 'Жилеты' },
      { id: 'aprons', name: 'Фартуки' }
    ]
  }
];