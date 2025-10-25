import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'HPL Premium Wood',
      description: 'Натуральная текстура дерева с высокой износостойкостью',
      specs: {
        thickness: '0.8-1.2 мм',
        size: '2440×1220 мм',
        resistance: 'Класс A',
        warranty: '10 лет'
      }
    },
    {
      title: 'HPL Stone Collection',
      description: 'Имитация натурального камня для элитных интерьеров',
      specs: {
        thickness: '0.8-1.2 мм',
        size: '2440×1220 мм',
        resistance: 'Класс A+',
        warranty: '12 лет'
      }
    },
    {
      title: 'HPL Metallic',
      description: 'Металлизированные поверхности для современных решений',
      specs: {
        thickness: '0.8-1.2 мм',
        size: '2440×1220 мм',
        resistance: 'Класс A',
        warranty: '10 лет'
      }
    }
  ];

  const services = [
    { icon: 'Hammer', title: 'Производство HPL', description: 'Полный цикл производства панелей высокого давления' },
    { icon: 'Ruler', title: 'Раскрой и обработка', description: 'Точный раскрой материала по вашим размерам' },
    { icon: 'Wrench', title: 'Монтаж под ключ', description: 'Профессиональная установка с гарантией качества' },
    { icon: 'Shield', title: 'Гарантийное обслуживание', description: 'Полное сопровождение после установки' }
  ];

  const advantages = [
    { icon: 'Award', title: 'Премиальное качество', text: 'Европейские стандарты производства' },
    { icon: 'Clock', title: 'Срок службы 15+ лет', text: 'Долговечность и надежность' },
    { icon: 'Flame', title: 'Огнестойкость', text: 'Класс пожарной безопасности КМ1' },
    { icon: 'Droplet', title: 'Влагостойкость', text: 'Идеально для влажных помещений' },
    { icon: 'Sun', title: 'UV-защита', text: 'Не выгорает на солнце' },
    { icon: 'Sparkles', title: 'Легкий уход', text: 'Простая очистка без специальных средств' }
  ];

  const portfolio = [
    { title: 'Офисный центр "Премиум"', category: 'Коммерческие объекты', area: '2500 м²' },
    { title: 'Отель "Метрополь"', category: 'Гостиничный бизнес', area: '1800 м²' },
    { title: 'Ресторан "Высота"', category: 'HoReCa', area: '450 м²' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-bold text-secondary">HPL Premium</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Главная', 'О компании', 'Продукция', 'Услуги', 'Портфолио', 'Преимущества', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      <section id="главная" className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Премиальные HPL-панели
                <span className="block text-primary mt-2">Европейского качества</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Производство и монтаж изделий из HPL высокого давления для элитных интерьеров
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Наша продукция
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  Портфолио проектов
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/623c6da8-3fae-455b-a6a0-0bda6b9dfc68/files/b207c7cb-b574-4065-8906-0dbd283f22c1.jpg"
                alt="HPL панели премиум качества"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы специализируемся на производстве и монтаже изделий из HPL (High Pressure Laminate) — материала высокого давления, 
              который сочетает превосходную эстетику с исключительными эксплуатационными характеристиками.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Factory" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">15+</h3>
                <p className="text-gray-600">лет на рынке HPL</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">500+</h3>
                <p className="text-gray-600">реализованных проектов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">50+</h3>
                <p className="text-gray-600">профессионалов в команде</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="продукция" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary text-center mb-4">Продукция</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Широкий ассортимент HPL-панелей для любых дизайнерских решений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Толщина:</span>
                      <span className="font-semibold text-secondary">{product.specs.thickness}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Размер:</span>
                      <span className="font-semibold text-secondary">{product.specs.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Износостойкость:</span>
                      <span className="font-semibold text-secondary">{product.specs.resistance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Гарантия:</span>
                      <span className="font-semibold text-primary">{product.specs.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:border-primary">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://cdn.poehali.dev/projects/623c6da8-3fae-455b-a6a0-0bda6b9dfc68/files/b3a796f9-6cc0-4f93-abec-982019cdbe8f.jpg"
                alt="Портфолио проект"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">{portfolio[0].title}</h3>
                <p className="text-gray-200 text-sm">{portfolio[0].category}</p>
                <p className="text-primary font-semibold">{portfolio[0].area}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://cdn.poehali.dev/projects/623c6da8-3fae-455b-a6a0-0bda6b9dfc68/files/ae1ab7bb-727f-4820-80aa-83fe49082ab5.jpg"
                alt="Портфолио проект"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">{portfolio[1].title}</h3>
                <p className="text-gray-200 text-sm">{portfolio[1].category}</p>
                <p className="text-primary font-semibold">{portfolio[1].area}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-900"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">{portfolio[2].title}</h3>
                <p className="text-gray-200 text-sm">{portfolio[2].category}</p>
                <p className="text-primary font-semibold">{portfolio[2].area}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Преимущества HPL</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Почему тысячи клиентов выбирают HPL-панели для своих проектов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <Icon name={advantage.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-600 mb-8">
                Готовы обсудить ваш проект? Наши специалисты проконсультируют вас по всем вопросам
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <p className="text-gray-600">info@hplpremium.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Адрес</h3>
                    <p className="text-gray-600">Москва, ул. Производственная, д. 25</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-xl font-bold">HPL Premium</span>
              </div>
              <p className="text-gray-400 text-sm">
                Производство и монтаж изделий из HPL высокого давления
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Продукция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@hplpremium.ru</li>
                <li>Москва, ул. Производственная, 25</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 HPL Premium. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}