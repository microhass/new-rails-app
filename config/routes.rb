Rails.application.routes.draw do
  # namespace :api do
  #   namespace :v1 do
  #     resources :messages, only: [:index]
  #   end
  # end

  get '/api/v1/messages/random', to: 'api/v1/messages#random'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
end
