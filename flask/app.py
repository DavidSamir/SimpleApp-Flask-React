from flask import Flask
from routes import api_v1

app = Flask(__name__)

# Register the API routes
app.register_blueprint(api_v1)


if __name__ == '__main__':
    app.run()
