import { CreditCard, ShieldCheck, Truck } from 'lucide-react'

const services = [
  {
    icon: CreditCard,
    title: 'Online kredit',
    text: 'İnceliklə seçilmiş məhsulları rahat ödəniş imkanları ilə əldə edin.',
  },
  {
    icon: ShieldCheck,
    title: '2 il zəmanət',
    text: 'Keyfiyyətə verdiyimiz söz hər detalda və hər istifadədə görünür.',
  },
  {
    icon: Truck,
    title: 'Pulsuz çatdırılma',
    text: 'Bakı daxilində seçilmiş sifarişlər üçün zərif və təhlükəsiz çatdırılma.',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-[#111111] px-4 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Xidmət üstünlükləri
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
            Lüks hiss yalnız görünüşdə deyil, xidmətdə də davam edir.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/8 p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}