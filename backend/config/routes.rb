Rails.application.routes.draw do
  scope :api do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end
end
