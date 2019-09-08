import { fetchAdvisorsListAction } from '../fetchAdvisorsListAction';

describe('fetchAdvisorsListAction', () => {
  it('should return action object', () => {
    const mockPayload = {
      data: [
        {
          name: 'Theo Kertzmann MD',
          jobTitle: 'Product Intranet Producer',
        },
        {
          name: 'Arlie Shanahan',
          jobTitle: 'Investor Tactics Developer',
        }
      ]
    }
    const expected = fetchAdvisorsListAction(mockPayload);
    const result = {
      type: "FETCH_ADVISORS_LIST",
      payload: {
        data: [
          {
            name: 'Theo Kertzmann MD',
            jobTitle: 'Product Intranet Producer',
          },
          {
            name: 'Arlie Shanahan',
            jobTitle: 'Investor Tactics Developer',
          }
        ]
      },
    };
    expect(expected).toEqual(result);
  });
});
