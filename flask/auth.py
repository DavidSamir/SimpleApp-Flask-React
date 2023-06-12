import sqlite3

def register_user(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
        conn.commit()
        return True, 'User registered successfully.'
    except sqlite3.IntegrityError:
        return False, 'Username already exists.'
    finally:
        cursor.close()
        conn.close()

def login_user(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()

    if user is None or user[2] != password:
        return False, 'Access denied. Invalid credentials.'
    else:
        return True, 'Access granted.'

# Create a table for user registration if it doesn't exist
conn = sqlite3.connect('users.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
''')
conn.commit()
cursor.close()
conn.close()
