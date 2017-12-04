class CreateUserSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :user_settings do |t|
      t.integer :user_id, null: false
      t.boolean :discoverable, null: false, default: true
      t.boolean :suggestable, null: false, default: true
      t.boolean :messageable, null: false, default: true 
    end
  end
end
