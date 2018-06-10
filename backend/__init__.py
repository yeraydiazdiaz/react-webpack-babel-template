"""
Sample app to test Pact contracts from the frontend Consumer.

https://github.com/pact-foundation/pact-python#verifying-pacts-against-a-service

"""

import os
from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(SECRET_KEY='dev')

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from .blueprints.todos import todos
    app.register_blueprint(todos)
    if os.getenv('PACT_PROVIDER_STATE'):
        from .blueprints.provider_state import provider_state
        app.register_blueprint(provider_state)

    return app
