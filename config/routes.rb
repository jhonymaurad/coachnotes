Rails.application.routes.draw do
  resources :players
  scope 'api/' do
    post 'coach_token' => 'coach_token#create'
    resources :coaches
    resources :matches do
      collection do
        get 'mine'
      end
    end
    resources :players do
      collection do
        get 'minep'
      end
    end
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
