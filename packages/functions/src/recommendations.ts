import { Recommendations } from "@sales-agent/core/recommendations";
import { Util } from "@sales-agent/core/util";

export const main = Util.handler(async (event) => {
    const {
        name = '',
        age = '',
        gender = '',
        stylePreference = '',
        fitInformation = '',
        budgetRange = ''
    } = event.queryStringParameters || {};

    // Call the compute function with the extracted parameters
    const result = await Recommendations.compute(name, age, gender, stylePreference, fitInformation, budgetRange);

    return JSON.stringify({ result });
});
