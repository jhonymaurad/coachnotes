Rails.application.routes.draw do
  post 'coach_token' => 'coach_token#create'
  resources :coaches
  resources :matches
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
