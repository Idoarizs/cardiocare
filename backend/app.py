from flask import Flask
from flask_restful import Api

# from .config import Config
from .routes import routes 

app = Flask(__name__)
api = Api(app)

# Routes
api.add_resource(routes.ModelPredict, '/predict')

if __name__ == '__main__':
    app.run(debug=True)