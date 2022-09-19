const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const result = await Promise.all([
    promiseTheaterIXX(),
    promiseTheaterVGC()
  ])

  return result.reduce(
    (totalEmosi, theater) => totalEmosi + theater.filter(({ hasil }) => hasil === emosi).length, 0
  )
};

module.exports = {
  promiseOutput,
};
