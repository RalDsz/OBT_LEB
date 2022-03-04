//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/03/2022
// First, we must import the schema creator

import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import testimonials from './testimonials.js'
import brands from './brands.js'
import abouts from './abouts.js'
import experiences from './experiences.js'
import skills from './skills.js'
import workExperience from './workExperience.js'
import contact from './contact.js'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([works, testimonials, brands, abouts, skills, workExperience, experiences, contact
    /* Your types here! */
  ]),
})