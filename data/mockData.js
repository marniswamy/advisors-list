import faker from "faker";

const getText = (value) => {
    if (value === 0) {
        return "Active";
    }
    return "Inactive";
}

/**
 * getFakeDataHelper used to generate the fake data of the list
 * of advisors
 */
export const getFakeDataHelper = (length) => {
    let list = [];
    for (let i = 0; i < length; i++) {
        list.push({
            name: faker.name.findName(),
            jobTitle: faker.name.jobTitle(),
            company: faker.company.companyName(),
            language: faker.random.locale(),
            image: faker.image.avatar(),
            reviews: faker.random.number(1000),
            status: getText(faker.random.number(1))
        })
    }
    return list;
};
