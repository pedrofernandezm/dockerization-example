class SessionsController < ApplicationController

  skip_before_action :authenticate_token!, only: :create

  def create
    session = session_manager.create!(session_params[:session])
    render json: session, include: "user"
  end

  def show
    render json: session_manager.session
  end

  protected

  def session_params
    params.permit(session: [:email, :password])
  end

end
