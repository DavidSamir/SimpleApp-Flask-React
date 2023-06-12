from flask import Blueprint, request, jsonify
from auth import register_user, login_user


#  add prefix
api_v1 = Blueprint('api_v1', __name__, url_prefix='/api/v1')



# add the login and reg endpoints
@api_v1.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Invalid username or password.'}), 400

    success, message = register_user(username, password)

    if success:
        return jsonify({'message': message})
    else:
        return jsonify({'error': message}), 400

@api_v1.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Invalid username or password.'}), 400

    success, message = login_user(username, password)

    if success:
        return jsonify({'message': message})
    else:
        return jsonify({'error': message}), 401



@api_v1.route('/sum', methods=['POST'])
def sum_numbers():
    try:
        data = request.get_json()
        numbers = data['value']
        if not isinstance(numbers, list):
            raise ValueError('Invalid input. Numbers should be a list.')

        result = sum(numbers)
        return jsonify({'result': result})

    except (KeyError, ValueError) as e:
        return jsonify({'error': str(e)}), 400

@api_v1.route('/concatenate', methods=['POST'])
def concatenate_strings():
    try:
        data = request.get_json()
        strings = data['strings']
        if not all(isinstance(s, str) for s in strings):
            raise ValueError('Invalid input. Strings should be a list of strings.')

        result = ''.join(strings)
        return jsonify({'result': result})

    except (KeyError, ValueError) as e:
        return jsonify({'error': str(e)}), 400