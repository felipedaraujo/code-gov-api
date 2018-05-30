const AbstractSearchAdapter         = require("./abstract_search_adapter");

/**
 * Represents a base adapter for ES connections that can handle the config.
 *
 * @class BaseElasticsearchAdapter
 * @extends {AbstractSearchAdapter}
 */
class BaseElasticsearchAdapter extends AbstractSearchAdapter {

  /**
     * Creates an instance of SearcherESClient.
     *
     */
  constructor(config) {
    super();
    this.config = config;
  }
}

module.exports = BaseElasticsearchAdapter;
