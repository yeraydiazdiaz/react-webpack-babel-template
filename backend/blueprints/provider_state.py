"""
Blueprint implenting the provider state endpoints

"""

from flask import Blueprint, request, abort

provider_state = Blueprint('setup', __name__, url_prefix='/setup')


@provider_state.route('/', methods=('POST',))
def setup():
    """Catch all provider state endpoint"""
    data = request.get_json()
    try:
        consumer = data['consumer']
        state = data['state']
    except KeyError:
        raise Exception('Expected JSON with `consumer` and `state` keys')

    if consumer == 'TodoApp':
        return todo_state_handler(state)

    abort(404, 'Consumer `{}` not supported'.format(consumer))


def todo_state_handler(state):
    if state == 'I have a list of todos':
        # create the TODO in a shared DB with the main app
        return 'Created', 201
