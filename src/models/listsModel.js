const user = {
  id: 1,
  username: 'franmper',
  email: 'test@test.com',
};

const items = [
  {
    id: 8,
    name: 'Papas fritas',
    cost: 22.45,
    quantity: 2,
    brand: 'Brand',
    description: 'Description',
  },
];

const listsModel = {
  lists: [
    {
      id: 0,
      title: 'List',
      buyedAt: '12 - 12 - 2012',
      buyedIn: 'Supermercado',
      status: 'Listado',
      user_id: user,
      quantityItems: 4,
      totalCost: 422.9,
      items: items,
    },
  ],
};

export default listsModel;
