# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coach.destroy_all
Match.destroy_all
Player.destroy_all

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
  },
  {
    email: 'Ashley@ga',
    password: 'ashley'
  }
])

coaches.each do |coach|
  5.times do
    coach.matches.create(title: Faker::Football.competition, date: Faker::Date.forward(23), location: Faker::Address.full_address, team: Faker::Team.name)
  end
end

coaches.each do |coach|
  10.times do
    coach.players.create(name: Faker::Football.player, date_of_birth: Faker::Date.birthday(4, 60), avatar: Faker::Pokemon.name, position: Faker::Job.position, team: Faker::Team.name)
  end
end

puts "#{Match.count} matches/practices, #{Coach.count} coaches and #{Player.count} in database"
