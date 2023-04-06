/**
 *
 * @module Service_Util
 */

/**
 *
 * @param {string} strBaseURL
 * @param {object} objURLParameters
 * @param {object} objRequestInit
 * @returns {Promise<object>}
 */
const callGetWithURLParams = async (
  strBaseURL,
  objURLParameters,
  objRequestInit
) => {
  const strURLWithParams = ((strBaseURL, objURLParameters) => {
    const strParameters = Object.keys(objURLParameters).reduce(
      (strPrev, strKey) => {
        if (strPrev.length > 0) {
          strPrev += "&";
        }

        strPrev += strKey + "=" + objURLParameters[strKey];
        return strPrev;
      },
      ""
    );

    return strBaseURL + (strParameters.length > 0 ? "?" + strParameters : "");
  })(strBaseURL, objURLParameters);

  const response = await fetch(strURLWithParams, objRequestInit);

  const result = await response.json();

  return result;
};

const get = async () => {};

/**
 *
 * @param {string} strURL
 * @param {object} objRequestInit
 * @returns {Promise<Object>}
 */
const callGet = async (strURL, objRequestInit) => {
  try {
    const response = await fetch(strURL, objRequestInit);

    const result = await response.json();

    return result;
  } catch (error) {}
};

const callFetchRetry = async (url, options, retries) => {
  try {
    //const response = await fetch(url, options);
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error(response.statusText);
  } catch (error) {
    if (retries > 0) {
      console.log("CallFetchRetry has retried!");
      return callFetchRetry(url, options, retries - 1);
    }
    throw error;
  }
};

/**
 * Definition of the base URL
 */
const strBASE_URL = "http://localhost:8080/api/v1/product/products";

export { callGet, callGetWithURLParams, strBASE_URL, callFetchRetry };
