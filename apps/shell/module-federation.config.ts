import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['main'],
};

export default config;
