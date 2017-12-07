class RenameImagesProfileImages < ActiveRecord::Migration[5.0]
  def change
    rename_table :images, :profile_images
  end
end
