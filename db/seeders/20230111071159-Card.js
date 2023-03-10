/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      title: 'Древняя Вражда',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/154.jpg',
      cost: 10.2,
      location: 'Москва',
      email: 'mtg_app_test@mail.ru',
      condition: 'Идеальное',
      status: true,
      description: 'А это уже куда лучше. Драка на инстанте — хорошее дело, ещё и с возможным бонусом в сете, где легенд много.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Балот-Пожиратель',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/156.jpg',
      cost: 15,
      location: 'Москва',
      email: 'mtg_app_test@mail.ru',
      condition: 'Идеальное',
      status: true,
      description: 'Вот чем хороши зеленые, так это своими существами. У красных за такую цену предлагается странный циклоп. ',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Защитник Геи ',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/162.jpg',
      cost: 10.2,
      location: 'Санкт-Петербург',
      email: 'mtg_app_test@mail.ru',
      condition: 'Идеальное',
      status: true,
      description: 'а первый взгляд карта так себе: первое же существо со второй атакой охотно пойдёт в блок и на этом карьера защитника окончится. Но все не так просто. Если дать этому чучелу, скажем, Турнирное Копье, то можно добиться ситуации, когда каждое существо оппонента, вышедшее на поле, будет вынуждено кидаться в блок и погибать. Тут есть много «но», но мне доводилось ставить похожими картами «lock» по существам. Оппоненты злились.)',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Гарна, Пламя Крови',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/194.jpg',
      cost: 10.2,
      location: 'Санкт-Петербург',
      email: 'mtg_app_test@mail.ru',
      condition: 'Хорошее',
      status: true,
      description: 'Есть подозрения, что с Гарной можно сочинить какое-нибудь комбо для различных форматов. Для лимитед тоже подойдет — можно ходить в безрассудные атаки, не жалея, блокировать, а потом всё выйдет обратно и сразу в бой. Есть перспективная связка с черными Таллидами (которые кушают существ). ',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Слизеног, Незваный Пассажир',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/205.jpg',
      cost: 10.2,
      location: 'Севастополь',
      email: 'mtg_app_test@mail.ru',
      condition: 'Хорошее',
      status: true,
      description: 'Супербосс фунгусовой колоды. Хорош и так, но, со своими будет лучше.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Арвад Проклятый',
      link: 'https://mtgsale.ru/cardImage/dom/RUS/191.jpg',
      cost: 10.2,
      location: 'Севастополь',
      email: 'mtg_app_test@mail.ru',
      condition: 'Хорошее',
      status: true,
      description: 'Черно-белый рыцарь с черно-белыми свойствами. Хорош и убедителен, но привязан к сочетанию и для хорошей работы требуется слишком много.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Быстроногий Наблюдатель',
      link: 'https://mtgsale.ru/cardImage/dom/rus/230.jpg',
      cost: 10.2,
      location: 'Владивосток',
      email: 'mtg_app_test@mail.ru',
      condition: 'Удовлетворительное',
      status: true,
      description: 'Преимущество по картам, стабилизация в любой цвет и разные другие легальные развлечения.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ледяной Манипулятор',
      link: 'https://mtgsale.ru/cardImage/dom/rus/219.jpg',
      cost: 10.2,
      location: 'Владивосток',
      email: 'mtg_app_test@mail.ru',
      condition: 'Удовлетворительное',
      status: true,
      description: 'Карта на века. Вмерзшая в Ледяную Эпоху классика. Способ манипулировать людьми, эльфами и вообще чем угодно. Можно расчищать дорогу своим существам, или сдерживать самую опасную угрозу противника. Можно выключать землю нужного оппоненту цвета. ',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Свеча из Кровяного Воска',
      link: 'https://mtgsale.ru/cardImage/dom/rus/212.jpg',
      cost: 10.2,
      location: 'Екатеринбург',
      email: 'mtg_app_test@mail.ru',
      condition: 'Удовлетворительное',
      status: true,
      description: 'В сете есть способы «покрутить» этот не самый дешевый, но всё же ремувал. Этого достаточно для оптимистичного взгляда на карту.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Убежище на Утесе',
      link: 'https://mtgsale.ru/cardImage/dom/rus/239.jpg',
      cost: 10.2,
      location: 'Екатеринбург',
      email: 'mtg_app_test@mail.ru',
      condition: 'Плохое',
      status: true,
      description: 'Убежище на Утесе выходит на поле битвы повернутым, если только под вашим контролем нет Горы или Равнины.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Серный Водопад',
      link: 'https://mtgsale.ru/cardImage/DOM/RUS/247.jpg',
      cost: 10.2,
      location: 'Астрахань',
      email: 'mtg_app_test@mail.ru',
      condition: 'Плохое',
      status: true,
      description: 'Серный Водопад выходит на поле битвы повернутым, если только под вашим контролем нет Острова или Горы.',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Внутренняя Гавань',
      link: 'https://mtgsale.ru/cardImage/dom/rus/240.jpg',
      cost: 4,
      location: 'Астрахань',
      email: 'mtg_app_test@mail.ru',
      condition: 'Плохое',
      status: true,
      description: 'Внутренняя Гавань выходит на поле битвы повернутой, если только под вашим контролем нет Леса или Острова.',

      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
