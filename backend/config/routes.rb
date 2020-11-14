Rails.application.routes.draw do
  resources :post, only: [:index, :show, :create, :update, :destroy]
end
