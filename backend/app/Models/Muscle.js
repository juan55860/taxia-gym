'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Muscle extends Model {

    excerciseMuscles() {
        return this.hasMany('App/Models/ExcerciseMuscle')
    }
}

module.exports = Muscle