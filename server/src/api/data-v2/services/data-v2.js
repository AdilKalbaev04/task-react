'use strict';

/**
 * data-v2 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-v2.data-v2');
