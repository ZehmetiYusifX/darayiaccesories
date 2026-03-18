export type Category = {
  id: string
  title: string
  subtitle: string
  image: string
}

export const categories: Category[] = [
  {
    id: 'uzukler',
    title: 'Üzüklər',
    subtitle: 'İşığı incə şəkildə daşıyan heykəltəraş forma',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sirgalar',
    title: 'Sırğalar',
    subtitle: 'Hərəkətdə belə zərifliyini qoruyan modern siluet',
    image:
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'boyunbagilar',
    title: 'Boyunbağılar',
    subtitle: 'Boyun xəttinə işıq kimi yerləşən sakit lüks',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bilerzikler',
    title: 'Bilərziklər',
    subtitle: 'Gündəlik ritmə sənət toxunuşu əlavə edən detallar',
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
  },
]