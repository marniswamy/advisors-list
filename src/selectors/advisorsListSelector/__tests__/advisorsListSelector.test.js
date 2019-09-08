import { advisorsListSelector } from '../advisorsListSelector';

describe('advisorsListSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      advisorsList: [
        {
          name: 'Jamie Mann',
          jobTitle: 'International Metrics Administrator',
          company: 'Ryan and Sons',
          language: 'zh_CN',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/sur4dye/128.jpg',
          reviews: 591,
          status: 'Inactive'
        },
        {
          name: 'Michael McLaughlin',
          jobTitle: 'Principal Directives Director',
          company: 'Stanton - Aufderhar',
          language: 'de_CH',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg',
          reviews: 285,
          status: 'Active'
        }
      ]
    };
    const expected = advisorsListSelector(mockState);
    const result = [
      {
        name: 'Jamie Mann',
        jobTitle: 'International Metrics Administrator',
        company: 'Ryan and Sons',
        language: 'zh_CN',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/sur4dye/128.jpg',
        reviews: 591,
        status: 'Inactive'
      },
      {
        name: 'Michael McLaughlin',
        jobTitle: 'Principal Directives Director',
        company: 'Stanton - Aufderhar',
        language: 'de_CH',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg',
        reviews: 285,
        status: 'Active'
      }
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = advisorsListSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
