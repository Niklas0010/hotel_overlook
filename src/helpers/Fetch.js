/**
 * 
 * @param {*} url 
 * @param {*} options 
 * @returns Array
 */

export async function doFetch(url, options = null) {
  if(!options) {
    options = {
      method: 'GET'
    }
  }
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }
  catch(error) {
    console.error(error)
  }
}
