class CreateUserProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_profiles do |t|
      t.integer :user_id, null: false
      t.decimal :lat, {:precision => 10, :scale => 6}
      t.decimal :lng, {:precision => 10, :scale => 6}
      t.text :bio
      t.string :work
      t.string :education
    end
  end
end
