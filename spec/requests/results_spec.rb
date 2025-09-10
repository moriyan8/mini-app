require 'rails_helper'

RSpec.describe "Results", type: :request do
  describe "GET /results" do
    it "returns a shuffled array of numbers from 1 to 6" do
      get "/results"
      expect(response).to have_http_status(:success)

      body = JSON.parse(response.body)
      expect(body["results"]).to be_an(Array)
      expect(body["results"].size).to eq(6)
      expect(body["results"].sort).to eq([1,2,3,4,5,6])
    end
  end
end
