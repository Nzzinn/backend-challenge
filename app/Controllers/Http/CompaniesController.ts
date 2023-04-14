import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async index ({response}) {
    const companies = await Company.all()

    return response.json(companies)
  }

  public async create ({request}: HttpContextContract){
    const {companyName, isEnable} = request.only(['companyName', 'isEnable'])

    const company = await Company.create({
      companyName,
      isEnable,
    })

    return company
  }

  public async update ({request, params, response}: HttpContextContract){
    const company = await Company.findOrFail(params.id)

    if(company){
      company.merge(request.only(['companyName', 'isEnable']))
      company.save()

      return response.ok({company})
    }else{
      return response.notFound()
    }
  }

  public async isEnable ({params, response}: HttpContextContract){
    try {
      let company = await Company.findOrFail(params.id)
      company.isEnable = !company.isEnable

      await company.save()

      return response.ok({company})
    } catch (error) {
      return response.notFound()
    }
  }

  public async delete ({params, response}){
    const company = await Company.findOrFail(params.id)

    if(company){
      company.delete()
    }

    return response.ok({company})
  }
}
