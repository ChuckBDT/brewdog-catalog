import mockedData from '../data/mockedData'

const cache = {};

const fakeApi = (pagin) => {
    const cacheKey = `${pagin.page}-${pagin.pagin}`;

    if (cache[cacheKey]) {
        return cache[cacheKey];
    }

    const result = mockedData.slice((pagin.page - 1) * pagin.pagin, pagin.page * pagin.pagin);
    cache[cacheKey] = result;

    return result;
}

export default fakeApi