const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  appDist: resolveApp('dist'),
  appIndexJs: resolveApp('src/index.ts'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  mongoDBURLWithName: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  mongoDBURL: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`
};
