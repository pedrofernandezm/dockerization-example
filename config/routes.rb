Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do
    resources :sessions, only: [:create, :show, :destroy]
    resources :users
    resources :tickets, only: [] do
      resources :replies, only: [:index, :create]
    end

    namespace :agents do
      resources :tickets, only: [:index, :show] do
        post :close
      end
    end

    namespace :customers do
      resources :tickets, only: [:index, :create, :show] do
        post :close
      end
    end
  end
end
