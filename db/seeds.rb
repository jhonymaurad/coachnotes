# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coach.destroy_all
Match.destroy_all

coaches = Coach.create([
  {
    email: 'jhony@ga',
    password: '1234'
  },
  {
    email: 'luis@ga',
    password: 'aaaa'
  },
  {
    email: 'edgar@ga',
    password: 'bbbb'
  }

])

coaches.each do |coach|
  3.times do
    coach.matches.create(title: Faker::Football.competition, date: Faker::Date.forward(23), location: Faker::Address.full_address, team: Faker::Football.team)
  end
end

puts "#{Match.count} matches/practices and #{Coach.count} coaches in database"
