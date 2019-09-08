import { sortedAdvisorsListSelector } from '../sortedAdvisorsListSelector';

describe('sortedAdvisorsListSelector', () => {
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
        }
      ],
    };
    const expected = sortedAdvisorsListSelector(mockState);
    const result = [
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
        name: 'Myrl Batz',
        jobTitle: 'Regional Functionality Associate',
        company: 'Leannon - Berge',
        language: 'ge',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/hjartstrorn/128.jpg',
        reviews: 168,
        status: 'Inactive'
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
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = sortedAdvisorsListSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
