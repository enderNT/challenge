import { app } from './src/index.js'
import 'dotenv/config'

app.listen(process.env.PORT || 4001, () => {
    console.log(`RUNNING on port ${process.env.PORT || 4001}`)
})
