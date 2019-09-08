import { fetchAdvisorsListReducer } from '../fetchAdvisorsListReducer';

describe('fetchAdvisorsListReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      advisorsList: [],
    };
    const mockPayload = {
      data: [
        {
          name: 'Oral Weissnat',
          jobTitle: 'Internal Directives Designer',
          company: 'Ernser, Muller and Flatley',
          language: 'en_IE',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg',
          reviews: 55,
          status: 'Active'
        },
        {
          name: 'Kristopher DuBuque',
          jobTitle: 'International Intranet Developer',
          company: 'Brown Inc',
          language: 'vi',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/instalox/128.jpg',
          reviews: 733,
          status: 'Inactive'
        }
      ]
    };
    const expected = fetchAdvisorsListReducer(mockState, mockPayload);
    const result = {
      advisorsList: [
        {
          name: 'Oral Weissnat',
          jobTitle: 'Internal Directives Designer',
          company: 'Ernser, Muller and Flatley',
          language: 'en_IE',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg',
          reviews: 55,
          status: 'Active'
        },
        {
          name: 'Kristopher DuBuque',
          jobTitle: 'International Intranet Developer',
          company: 'Brown Inc',
          language: 'vi',
          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/instalox/128.jpg',
          reviews: 733,
          status: 'Inactive'
        }
      ],
    };
    expect(expected).toEqual(result);
  });
});
