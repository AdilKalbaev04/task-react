'use strict';

/**
 * vue-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vue-task.vue-task');
