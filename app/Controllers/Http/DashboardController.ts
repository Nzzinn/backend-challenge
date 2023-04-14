import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Company from 'App/Models/Company'
import User from 'App/Models/User'

export default class DashboardController {
  public async indexCompanies ({response}: HttpContextContract) {
    try {
      const companies = await Company.query().select('*').preload('user')

      return response.ok(companies)
    } catch (error) {
      return response.json({ message: 'Error retrieving companies information' })
    }
  }

  public async filterAscCompany ({response}){
    try{
      const companies = await Company.query().orderBy('companies.id', 'asc').preload('user')

      return response.ok(companies)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }

  public async filterDescCompany ({response}){
    try{
      const companies = await Company.query().orderBy('companies.id', 'desc').preload('user')

      return response.ok(companies)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }

  public async filterAscNameCompany ({response}: HttpContextContract){
    try{
      const companies = await Company.query().orderBy('companies.company_name', 'asc').preload('user')
      const filter = companies.map((company) => {
        const users = company.user.map((user) => user.name)

        return {name: company.companyName, users: users}
      })

      return response.ok(filter)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }

  public async filterDescNameCompany ({response}: HttpContextContract){
    try{
      const companies = await Company.query().orderBy('companies.company_name', 'desc').preload('user')
      const filter = companies.map((company) => {
        const users = company.user.map((user) => user.name)

        return {name: company.companyName, users: users}
      })

      return response.ok(filter)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }

  public async indexUsers ({response}: HttpContextContract){
    const users = await User.query()
      .select('users.id', 'users.name', 'users.company_id', 'users.is_enable', 'companies.company_name')
      .preload('company')
      .leftJoin('companies', 'users.company_id', 'companies.id')

    return response.ok(users)
  }

  public async filterAscNameUser ({response}: HttpContextContract){
    try{
      const users = await User.query().orderBy('name', 'asc')
        .select('users.id', 'users.name', 'users.company_id', 'users.is_enable', 'companies.company_name')
        .preload('company')
        .leftJoin('companies', 'users.company_id', 'companies.id')
      return response.ok(users)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }

  public async filterDescNameUser ({response}: HttpContextContract){
    try{
      const users = await User.query().orderBy('name', 'desc')
        .select('users.id', 'users.name', 'users.company_id', 'users.is_enable', 'companies.company_name')
        .preload('company')
        .leftJoin('companies', 'users.company_id', 'companies.id')
      return response.ok(users)
    }catch(error){
      return response.json({message: 'Error retrieving users filter'})
    }
  }
}
