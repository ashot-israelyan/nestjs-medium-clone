import ormcCnfig from '@app/ormconfig';

const ormseedconfig = {
  ...ormcCnfig,
  migrations: [__dirname + '/seeds/*.ts'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormseedconfig;
