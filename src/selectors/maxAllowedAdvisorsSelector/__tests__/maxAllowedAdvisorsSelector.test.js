import { maxAllowedAdvisorsSelector } from '../maxAllowedAdvisorsSelector';

describe('maxAllowedAdvisorsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      advisorsList: [
        {
          name: 'Dr. Bessie Koss',
          jobTitle: 'International Paradigm Assistant',
          company: 'Smith - Stark',
          language: 'ge',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/instalox/128.jpg',
          reviews: 657,
          status: 'Active'
        },
        {
          name: 'Prince Lindgren',
          jobTitle: 'Forward Infrastructure Developer',
          company: 'Harber - Douglas',
          language: 'ru',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/artvavs/128.jpg',
          reviews: 303,
          status: 'Inactive'
        },
        {
          name: 'Myrl Batz',
          jobTitle: 'Regional Functionality Associate',
          company: 'Leannon - Berge',
          language: 'ge',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/hjartstrorn/128.jpg',
          reviews: 168,
          status: 'Inactive'
        },
        {
          name: 'Ara Nicolas',
          jobTitle: 'National Web Planner',
          company: 'Leffler Group',
          language: 'en_AU',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg',
          reviews: 489,
          status: 'Inactive'
        },
      ],
    };
    const expected = maxAllowedAdvisorsSelector(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = maxAllowedAdvisorsSelector(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
});
