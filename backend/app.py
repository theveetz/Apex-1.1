from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('forensic_tool.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    address = request.args.get('address')
    conn = get_db_connection()
    transactions = conn.execute('SELECT * FROM transactions WHERE sender = ? OR receiver = ?', (address, address)).fetchall()
    conn.close()
    return jsonify([dict(tx) for tx in transactions])

if __name__ == '__main__':
    app.run(debug=True)
