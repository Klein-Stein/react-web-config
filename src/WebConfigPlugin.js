import { config } from 'dotenv';
import { validate } from 'schema-utils';

const schema = {
  type: 'object',
  properties: {
    path: {
      description: 'Path to .env file',
      type: 'string',
    },
  },
  additionalProperties: false,
};

const WebConfigPlugin = (options = {}) => {
  validate(schema, options, {
    name: 'React Web Native Plugin',
    baseDataPath: 'options',
  });
  return config(options);
};

export default WebConfigPlugin;
