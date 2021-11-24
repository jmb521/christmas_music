Rails.application.routes.draw do
  resources :reviews
  resources :users
  resources :albums
  resources :songs
  resources :artists

  post '/signup', to: "users#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
