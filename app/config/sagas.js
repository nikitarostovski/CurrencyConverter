import { takeEvery, select, call, put } from 'redux-saga/effects';

import { CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, SWAP_CURRENCY, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

const getLatestRate = currency => fetch('http://data.fixer.io/api/latest?access_key=ddbb708d796b9feb32fa462309fedb5e');

const fetchLatestConversionRates = function* (action) {
    try {
        let currency = action.currency;
        if (currency == undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_RESULT, result });
        }
    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message });
    }
};

const rootSaga = function* () {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;