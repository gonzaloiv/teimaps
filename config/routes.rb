Rails.application.routes.draw do
  
  root :to =>'layouts#index'

  resources :paths , only: [:show, :create] do
    resources :marks, only: [:index, :create]
  end

end
