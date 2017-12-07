class UserProfile < ApplicationRecord

  belongs_to :user
  has_many :profile_images
  
  validates :user, presence: true


end
