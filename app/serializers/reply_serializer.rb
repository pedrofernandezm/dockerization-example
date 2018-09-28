class ReplySerializer < ActiveModel::Serializer
  attributes :id, :message, :author, :created_at

  belongs_to :user
  belongs_to :ticket

  def id
    object.uuid
  end

  def author
    object.user.email
  end

end
