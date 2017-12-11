class CreateConnections < ActiveRecord::Migration[5.0]
  def change
    create_table :connections do |t|
      t.integer :user_id, null: false
      t.integer :requester_id, null: false
      t.string :status, null: false, default: 'Pending'
    end
    add_index(:connections, [:user_id, :requester_id], :unique => true)
  end
end
