export type Product = {
  id: string
  slug: string
  name: string
  category: 'Sırğalar' | 'Üzüklər' | 'Boyunbağılar' | 'Bilərziklər'
  material: string
  price: string
  image: string
  accent: string
  gallery: string[]
}

export const products: Product[] = [
  {
    id: 'aurora',
    slug: 'aurora-sirga',
    name: 'Aurora Sırğa',
    category: 'Sırğalar',
    material: '18K qızıl örtük / gümüş baza',
    price: '₼ 289',
    image:
      'https://images.unsplash.com/photo-1617038260846-2c0ac7267d8f?auto=format&fit=crop&w=1200&q=80',
    accent: 'Sakit parıltı',
    gallery: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'forma',
    slug: 'forma-sirga',
    name: 'Forma Sırğa',
    category: 'Sırğalar',
    material: 'Qızıl ton / skulptural forma',
    price: '₼ 269',
    image:
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
    accent: 'Zərif dinamika',
    gallery: [],
  },
  {
    id: 'narin',
    slug: 'narin-uzuk',
    name: 'Narin Üzük',
    category: 'Üzüklər',
    material: '925 gümüş / minimal daş işləmə',
    price: '₼ 239',
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80',
    accent: 'Memarlıq xətti',
    gallery: [],
  },
  {
    id: 'lune',
    slug: 'lune-boyunbagi',
    name: 'Lune Boyunbağı',
    category: 'Boyunbağılar',
    material: 'Gümüş / parlaq səth',
    price: '₼ 319',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    accent: 'İşıq kompozisiyası',
    gallery: [],
  },
  {
    id: 'elysian',
    slug: 'elysian-bilerzik',
    name: 'Elysian Bilərzik',
    category: 'Bilərziklər',
    material: '18K qızıl tonu / yumşaq radius',
    price: '₼ 349',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    accent: 'Müasir miras',
    gallery: [],
  },
]