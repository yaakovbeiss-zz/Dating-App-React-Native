class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :user_profile_id
      t.boolean :main_image, default: true, null: false
    end
  end
end
