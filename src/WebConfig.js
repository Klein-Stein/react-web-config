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

const WebConfig = (options = {}) => {
  validate(schema, options, {
    name: 'React Web Native',
    baseDataPath: 'options',
  });
  return config(options);
};

export default WebConfig;
