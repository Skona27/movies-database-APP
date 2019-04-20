const NodeCache = require("node-cache");

class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({ stdTTL: ttlSeconds });
  }

  list() {
    return this.cache.keys();
  }

  async get(key, query) {
    const value = this.cache.get(key);

    if (value) return value;

    const result = await query();
    this.cache.set(key, result);
    return result;
  }

  del(keys) {
    this.cache.del(keys);
  }

  flush() {
    this.cache.flushAll();
  }
}

module.exports = Cache;
