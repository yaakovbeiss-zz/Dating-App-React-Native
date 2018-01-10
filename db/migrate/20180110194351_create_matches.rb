class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.integer :matchmaker_id, null: false
      t.integer :recipient_id, null: false
      t.integer :suggested_id, null: false
      t.text :message
      t.timestamps
    end
  end
end
