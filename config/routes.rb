Rails.application.routes.draw do
  
  root :to =>'layouts#index'
  get '*path' => 'layouts#index'

  resources :paths , only: [:show, :new] do
    resources :marks, only: [:index, :new]
  end

end
