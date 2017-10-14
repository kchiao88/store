# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.create(title: 'Hello Toy', desc:"Wheter you're training for me, i will say hello to you.", price:6.00, pic:"", popular: true)
Product.create(title: 'Hello Game', desc:"When you're on the go, play a game!", price:5.69, pic:"", popular: false)