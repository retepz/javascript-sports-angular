import { Environment } from '@src/types/environment'
import productionEnvironment from '@src/environments/production/environment'

const environment: Environment = {
  ...productionEnvironment,
  name: 'production-gh',
  useHashRouter: true,
}

export default environment
