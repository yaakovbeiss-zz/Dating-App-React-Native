Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show, :update, :index]
    resources :user_settings, only: [:create, :update, :show]
    resources :user_profiles, only: [:create, :update, :show]
    resources :profile_images, only: [:create, :destroy, :index, :show]
    resources :connections, only: [:create, :update, :destroy, :index]
  end

end
