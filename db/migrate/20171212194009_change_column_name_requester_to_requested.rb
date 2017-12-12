class ChangeColumnNamerequestedToRequested < ActiveRecord::Migration[5.0]
  def change
    rename_column :connections, :requested_id, :requested_id
  end
end
