class UserProfile < ApplicationRecord

  belongs_to :user
  has_many :profile_images

  validates :user, presence: true

  has_one :main_image,
    -> { where main_image: true },
    class_name: 'ProfileImage',
    foreign_key: :user_profile_id

end
