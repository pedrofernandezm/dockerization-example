class CreateReplies < ActiveRecord::Migration[5.0]
  def change
    create_table :replies do |t|
      t.text :message
      t.integer :user_id
      t.integer :ticket_id
      t.string :uuid

      t.timestamps
    end
  end
end
