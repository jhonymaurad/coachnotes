Rails.application.routes.draw do
  scope 'api/' do
    post 'coach_token' => 'coach_token#create'
    resources :coaches
    resources :matches do
      collection do
        get 'mine'
      end
    end
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
