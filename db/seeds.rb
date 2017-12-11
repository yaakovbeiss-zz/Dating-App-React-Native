# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

image = File.new("app/assets/images/default_profile_pic.jpg")

20.times do
  full_name = Faker::Name.name
  first_name = full_name.split(" ")[0]
  last_name = full_name.split(" ")[1]
  gender = rand(2) + 1

  user = User.create!({ email: Faker::Internet.email, password: 'password', first_name: first_name, last_name: last_name,
    gender: gender, birthday: Faker::Date.birthday })

  user_settings = UserSettings.create!({ user_id: user.id, discoverable: true, suggestable: true, messageable: true })
  user_profile = UserProfile.create!({ user_id: user.id, lat: Faker::Address.latitude, lng: Faker::Address.longitude,
    bio: Faker::Seinfeld.quote, work: Faker::Seinfeld.quote, education: Faker::Seinfeld.quote })

  profile_image = ProfileImage.create!({ user_profile_id: user_profile.id, main_image: true, image: image })
end
