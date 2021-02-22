import { rest } from 'msw';

export const handlers = [
  rest.post('/user', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      message: 'Successful',
    }),
  )),
  // rest.post('/test_case', (req, res, ctx) => res(
  //   ctx.status(200),
  //   ctx.json({
  //     message: 'Successful',
  //   }),
  // )),
  rest.get('/test_case', (req, res, ctx) => res(
    ctx.json({
      testCaseList: [
        {
          visibility: 'Public',
          category: 'Lenovo',
          title: 'Lorem ipsum dolor sit amet.',
          owner: 'Citrus',
          date: '2021-01-19',
        },
        {
          visibility: 'Private',
          category: 'MSI',
          title: 'Lorem ipsum dolor sit amet consectetur.',
          owner: 'Roxy',
          date: '2021-01-01',
        },
        {
          visibility: 'Private',
          category: 'Asus',
          title: 'Lorem ipsum dolor sit amet consectetur.',
          owner: 'Vivi',
          date: '2021-01-02',
        },
        {
          visibility: 'Share',
          category: 'Asus',
          title: 'Lorem ipsum dolor sit.',
          owner: 'Anne',
          date: '2021-01-03',
        },
        {
          visibility: 'Private',
          category: 'Lenovo',
          title: 'Lorem ipsum dolor sit amet.',
          owner: 'Sunny',
          date: '2021-01-18',
        },
      ],
    }),
  )),
  rest.get('/announcement', (req, res, ctx) => res(
    ctx.json({
      announcement: [
        {
          type: 'New release',
          title: 'Lorem ipsum dolor sit amet consectetur.',
          lastUpdate: '2021-01-02',
        },
        {
          type: 'Driver',
          title: 'Lorem ipsum dolor sit amet consectetur.',
          lastUpdate: '2021-01-10',
        },
        {
          type: 'Driver',
          title: 'Lorem ipsum dolor consectetur.',
          lastUpdate: '2021-01-05',
        },
        {
          type: 'Driver',
          title: 'Lorem ipsum dolor sit consectetur.',
          lastUpdate: '2021-01-01',
        },
        {
          type: 'New release',
          title: 'Lorem ipsum dolor sit consectetur.',
          lastUpdate: '2021-01-03',
        },
        {
          type: 'Driver',
          title: 'Lorem ipsum dolor consectetur.',
          lastUpdate: '2021-01-11',
        },
      ],
    }),
  )),
];

export default handlers;
