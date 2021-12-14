const { getConnection } = require("../helper/dbConnect");
const { REDIS_PREFIX_KEY } = JSON.parse(process.env.REDIS);
module.exports = async function getKey(key) {
  const redis = await getConnection();
  key = REDIS_PREFIX_KEY + key;
  return new Promise((resolve, reject) => {
    redis.get(key, (err, res) => {
      if (err) reject(err);
      try{
        res = JSON.parse(res);
        }
        catch(e){}
      resolve(JSON.parse(res));
    });
  });
};
