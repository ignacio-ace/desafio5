import { Router } from 'express'
import { Customers } from '../components/Customers.js'

const customers = new Customers()
const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/api/customers', (req, res) => {
  customers.add(req.body)
  res.redirect('/')
})

router.get('/customers', (req, res) => {
  res.render('customers', { customers: customers.getAll() })
})

export { router }
