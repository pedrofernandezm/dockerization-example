class ApplicationController < ActionController::API

  include ResponseHandler

  before_action :authenticate_token!

  protected

  def session_manager
    @session_manager ||= SessionManager.new(authorization_token)
  end

  def authorization_token
    (request.headers["HTTP_AUTHORIZATION"] || "").split(" ").last
  end

  def authenticate_token!
    unless authorization_token.present? && session_manager.valid?
      raise ApiExceptions::AuthenticationError.new
    else
      session_manager.refresh!
    end
  end

  def current_user
    session_manager.session.user
  rescue => e
    nil
  end

end
