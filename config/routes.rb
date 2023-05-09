Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index show create update destroy] do
        get :photo, on: :member
        resources :posts, only: %i[index show create update destroy] do
          get :photo, on: :member
          resources :comments, only: %i[index show create destroy update] 
          resources :likes, only: %i[index create]
        end
      end
     
      post '/login', to: 'sessions#create'
      get '/authorized', to: 'sessions#show'
    end
  end
  root 'home#index'
end
