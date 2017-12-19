# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

image = File.new("app/assets/images/default_profile_pic.jpg")

yaakov = User.create!({ email: "yaakovbeiss@gmail.com", password: 'password', first_name: "Yaakov", last_name: "Beiss",
  gender: 1, birthday: Faker::Date.birthday })

user_settings = UserSettings.create!({ user_id: yaakov.id, discoverable: true, suggestable: true, messageable: true })
user_profile = UserProfile.create!({ user_id: yaakov.id, lat: Faker::Address.latitude, lng: Faker::Address.longitude,
  bio: Faker::Seinfeld.quote, work: Faker::Seinfeld.quote, education: Faker::Seinfeld.quote })

profile_image = ProfileImage.create!({ user_profile_id: user_profile.id, main_image: true, image: image })

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


  status = (rand(2) + 1) > 1 ? 'Pending' : 'Accepted'
  Connection.create!({ user_id: yaakov.id, requested_id: user.id, status: status})

  User.all.each do |other_user|
    if other_user.gender != user.gender
      Rating.create!({ rater_id: user.id, rated_id: other_user.id, rating: (rand(5) + 1) })
    end
  end

end
