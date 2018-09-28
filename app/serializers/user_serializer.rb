class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :type

  has_many :tickets

  def id
    object.uuid
  end

end
