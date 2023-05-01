import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/', () => {
      return 'DEAR USER, WELCOME!'
    })

    Route.group(() => {
      Route.get('/', 'DashboardController.indexCompanies')
      Route.get('/asc', 'DashboardController.ascCompany')
      Route.get('/desc', 'DashboardController.descCompany')
      Route.get('/ascName', 'DashboardController.ascNameCompany')
      Route.get('/descName', 'DashboardController.descNameCompany')
    }).prefix('/companies')

    Route.group(() => {
      Route.get('/', 'DashboardController.indexUsers')
      Route.get('/orderAsc', 'DashboardController.ascNameUser')
      Route.get('/orderDesc', 'DashboardController.descNameUser')
    }).prefix('/users')
  }).prefix('/dashboard')

  Route.group(() => {
    Route.post('/', 'UsersController.create')
    Route.get('/', 'UsersController.index')
    Route.put('/:id', 'UsersController.update')
    Route.put('/enable/:id', 'UsersController.isEnable')
    Route.delete('/:id', 'UsersController.delete')
  }).prefix('/users')

  Route.group(() => {
    Route.post('/', 'CompaniesController.create')
    Route.get('/', 'CompaniesController.index')
    Route.put('/:id', 'CompaniesController.update')
    Route.put('/enable/:id', 'CompaniesController.isEnable')
    Route.delete('/:id', 'CompaniesController.delete')
  }).prefix('/companies')
}).prefix('/api')
