class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :rater_id, null: false
      t.integer :rated_id, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    add_index(:ratings, [:rater_id, :rated_id], :unique => true)
  end
end
