class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.integer :user_id
      t.string :token
      t.datetime :expires_at
      t.string :uuid

      t.timestamps
    end
  end
end
