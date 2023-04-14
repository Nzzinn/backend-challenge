import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({response}) {
    const users = await User.all()

    return response.json(users)
  }

  public async create ({request}: HttpContextContract){
    const {name, isEnable, companyId} = request.only(['name', 'isEnable', 'companyId'])

    const user = await User.create({
      name,
      isEnable,
      companyId,
    })

    return user
  }

  public async update ({params, request, response}: HttpContextContract){
    const user = await User.findOrFail(params.id)

    if(user){
      user.merge(request.only(['name', 'isEnable']))
      user.save()

      return response.ok({user})
    }else{
      return response.notFound()
    }
  }

  public async isEnable ({params, response}: HttpContextContract){
    try {
      let user = await User.findOrFail(params.id)
      user.isEnable = !user.isEnable

      await user.save()

      return response.ok({user})
    } catch (error) {
      return response.notFound()
    }
  }

  public async delete ({params, response}){
    const user = await User.findOrFail(params.id)

    if(user){
      user.delete()
    }

    return response.ok({user})
  }
}
