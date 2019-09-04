import faker from "faker";

/**
 * getFakeDataHelper used to generate the fake data of the list
 * of advisors
 */
export const getFakeDataHelper = () => {
    let list = [];
    for (let i = 0; i < 20; i++) {
        list.push({
            name: faker.name.findName(),
            company: faker.company.companyName()
        })
    }
    return list;
};
