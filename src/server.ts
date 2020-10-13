import app from './app'

import { port } from './config/envs'

app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
})
