class SessionSerializer < ActiveModel::Serializer
  attributes :id, :access_token, :expires_at

  belongs_to :user

  def id
    object.uuid
  end

end
